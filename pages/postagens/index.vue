<script setup>
const { data: articles } = await useAsyncData('posts', () =>
	queryContent('/postagens').find()
);

const { data: queryArticleDates } = await useAsyncData('article-dates', () =>
	queryContent('/postagens').only(['title', '_path', 'createdAt']).find()
);
</script>

<template>
	<main class="mt-2 max-w-5xl m-auto p-3">
		<article class="grid grid-cols-6 gap-3">
			<section class="col-span-4 gap-6 flex flex-col">
				<ArticleCard
					v-for="post in articles"
					:key="post._id"
					:title="post.title"
					:description="post.description"
					:preview="post.preview"
					:author="post.author"
					:path="post._path"
					:reading-time="12"
				/>
			</section>
			<aside class="col-span-2 flex flex-col gap-3">
				<SearchInput />
				<ArticleYearSumary :years="queryArticleDates" />
			</aside>
		</article>
	</main>
</template>
