<script lang="ts" setup>
useHead({
	titleTemplate: titleChunk => {
		return titleChunk ? `${titleChunk} - Blog` : 'Blog';
	},
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
