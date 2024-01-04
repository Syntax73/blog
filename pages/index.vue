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

const { data: articles } = await useAsyncData('home', () =>
	queryContent<Article>('/postagens').find()
);
</script>

<template>
	<main class="mt-5 max-w-5xl m-auto p-3">
		<section class="grid sm:grid-cols-3 gap-6">
			<ArticleCard
				v-for="(post, index) in articles"
				:key="post._id"
				:title="post.title"
				:description="post.description"
				:preview="post.preview"
				:author="post.author"
				:path="post._path"
				:reading-time="12"
				:class="!index ? 'sm:col-span-2' : ''"
			/>
		</section>
	</main>
</template>
