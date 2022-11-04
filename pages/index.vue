<script setup lang="ts">
const { data: articles } = await useAsyncData('home', () =>
	queryContent('/postagens').find()
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
