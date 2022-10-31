<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
	queryContent().where({ _path: route.path }).findOne()
);
</script>

<template>
	<main class="max-w-4xl m-auto p-3">
		<BlogHeader
			:title="data.title"
			:author="data.author"
			:description="data.description"
			:tags="data.tags"
			:created-at="data.createdAt"
		/>

		<ContentRenderer :value="data" class="content" />
	</main>
</template>
