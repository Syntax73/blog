<script setup lang="ts">
const { data: articles } = await useAsyncData('home', () =>
	queryContent('/postagens').limit(3).find()
);
</script>

<template>
	<main class="mt-2 max-w-5xl m-auto p-3">
		<ArticleCard
			v-for="post in articles"
			:key="post._id"
			:title="post.title"
			:description="post.description"
			:author="post.author"
			:path="post._path"
			:reading-time="12"
		/>
	</main>
</template>
