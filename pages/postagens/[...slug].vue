<script setup lang="ts">
const route = useRoute();

const { data: article } = await useAsyncData(`content-${route.path}`, () =>
	queryContent().where({ _path: route.path }).findOne()
);

const [prevArticle, nextArticle] = await queryContent()
	.only(['_path', 'title'])
	.findSurround({ _path: route.path });

const toc = computed(() => article.value.body.toc.links);
</script>

<template>
	<main class="max-w-5xl m-auto p-3 grid grid-cols-5 gap-8">
		<article class="col-span-5 md:col-span-4">
			<BlogHeader
				:title="article.title"
				:author="article.author"
				:description="article.description"
				:tags="article.tags"
				:created-at="article.createdAt"
			/>

			<section>
				<ContentRenderer :value="article" class="content" />
			</section>

			<section>
				<BlogPrevNextArticle :prev="prevArticle" :next="nextArticle" />
			</section>
		</article>

		<aside class="mt-10 hidden md:block">
			<nav class="sticky top-16">
				<h2 class="font-semibold text-lg mb-2">Conteúdo</h2>

				<BlogTableContent :links="toc" />
			</nav>
		</aside>
	</main>
</template>
