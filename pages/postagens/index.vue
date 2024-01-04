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

const { data: articles } = await useAsyncData(
	'posts',
	() => {
		const page = route.query.page;

		if (route.query.search) {
			const search = route.query.search;
			const splittedSearch = search.toString().trim().split(' ');

			return queryContent<Article>('/postagens')
				.where({
					$or: [
						{
							title: { $contains: splittedSearch },
						},
						{
							description: { $contains: splittedSearch },
						},
						{
							author: { $contains: splittedSearch },
						},
					],
				})
				.find();
		}

		return queryContent('/postagens')
			.limit(1)
			.skip((Number(page) - 1) * 1)
			.find();
	},
	{
		watch: [() => route.query.search, () => route.query.page],
	}
);

const { data: queryArticleDates } = await useAsyncData('article-dates', () =>
	queryContent<Article>('/postagens')
		.only(['title', '_path', 'createdAt'])
		.find()
);
</script>

<template>
	<main class="mt-2 max-w-5xl m-auto p-3">
		<article class="grid grid-cols-6 gap-3">
			<section class="col-span-4 gap-6 flex flex-col">
				<ArticleCard
					v-for="post in articles"
					:key="post._id"
					:title="post.title!"
					:description="post.description"
					:preview="post.preview"
					:author="post.author"
					:path="post._path!"
					:reading-time="12"
				/>

				<ArticlePrevNextPage :currentPage="2" :hasNextPage="true" />
			</section>
			<aside class="col-span-2 flex flex-col gap-3">
				<SearchInput />
				<ArticleYearSummary :years="queryArticleDates!" />
			</aside>
		</article>
	</main>
</template>
