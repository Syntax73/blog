<script setup lang="ts">
const route = useRoute();

const { data: articles } = await useAsyncData(
	'posts',
	() => {
		const page = route.query.page;

		if (route.query.search) {
			const search = route.query.search;
			const splittedSearch = search.toString().trim().split(' ');

			return queryCollection('postagens')
				.orWhere(query => query.where('title', 'LIKE', `%${splittedSearch}%`))
				.orWhere(query =>
					query.where('description', 'LIKE', `%${splittedSearch}%`),
				)
				.orWhere(query => query.where('author', 'LIKE', `%${splittedSearch}%`))
				.all();
		}

		return queryCollection('postagens')
			.limit(1)
			.skip((Number(page) - 1) * 1)
			.all();
	},
	{
		watch: [() => route.query.search, () => route.query.page],
	},
);

const { data: queryArticleDates } = await useAsyncData('article-dates', () =>
	queryCollection('postagens').select('title', 'path', 'createdAt').all(),
);
</script>

<template>
	<main class="mt-2 max-w-5xl m-auto p-3">
		<article class="grid grid-cols-6 gap-3">
			<section class="col-span-4 gap-6 flex flex-col">
				<ArticleCard
					v-for="post in articles"
					:key="post.id"
					:title="post.title!"
					:description="post.description"
					:preview="post.preview"
					:author="post.author"
					:path="post.path!"
					:reading-time="12"
				/>

				<ArticlePrevNextPage :currentPage="2" :hasNextPage="true" />
			</section>
			<aside class="col-span-2 flex flex-col gap-3">
				<SearchInput />
				<ArticleYearSummary
					v-if="queryArticleDates"
					:years="queryArticleDates as any"
				/>
			</aside>
		</article>
	</main>
</template>
