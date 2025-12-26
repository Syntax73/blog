<script lang="ts" setup>
useHead({
	titleTemplate: titleChunk => {
		return titleChunk ? `${titleChunk} - Blog` : 'Blog';
	},
	link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	htmlAttrs: {
		lang: 'pt-BR',
	},
	noscript: [
		{
			textContent: 'Este site funciona melhor com o Javascript habilitado! 👍',
		},
	],
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
