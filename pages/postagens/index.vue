<script setup>
const { data: articles } = await useAsyncData('posts', () =>
	queryContent('/postagens').find()
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
