<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

interface Article extends MarkdownParsedContent {
	title: string;
	description: string;
	author: string;
	tags: string[];
	preview: string;
	createdAt: string;
}

const route = useRoute();

const { data: article } = await useAsyncData(`content-${route.path}`, () =>
	queryContent<Article>().where({ _path: route.path }).findOne()
);

if (!article.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Artigo não encontrado',
	});
}

const [prevArticle, nextArticle] = await queryContent()
	.only(['_path', 'title'])
	.findSurround({ _path: route.path });

const toc = computed(() => article.value?.body?.toc?.links);

useSeoMeta({
	title: article.value?.title,
	description: () => article.value?.description,
	// Facebook
	ogTitle: () => article.value?.title,
	ogDescription: () => article.value?.description,
	ogImage: () => article.value?.preview,
	ogLocale: 'pt_BR',
	ogType: 'article',
	// Twitter/X
	twitterTitle: () => article.value?.title,
	twitterDescription: () => article.value?.description,
	twitterImage: () => article.value?.preview,
	twitterCreator: () => article.value?.author,
	twitterCard: 'summary_large_image',
});
</script>

<template>
	<main class="max-w-5xl m-auto p-3 grid grid-cols-5 gap-8">
		<article class="col-span-5 md:col-span-4">
			<BlogHeader
				:title="article?.title!"
				:author="article?.author!"
				:description="article?.description!"
				:tags="article?.tags!"
				:created-at="article?.createdAt!"
			/>

			<section>
				<ContentRenderer :value="article!" class="content" />
			</section>

			<section>
				<BlogPrevNextArticle :prev="prevArticle" :next="nextArticle" />
			</section>
		</article>

		<aside class="mt-10 hidden md:block">
			<nav class="sticky top-16">
				<h2 class="font-semibold text-lg mb-2">Conteúdo</h2>

				<BlogTableContent :links="toc!" />
			</nav>
		</aside>
	</main>
</template>
