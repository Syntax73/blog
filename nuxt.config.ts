import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@vueuse/nuxt',
		'nuxt-icon',
		'@nuxtjs/tailwindcss',
	],
	content: {
		markdown: {
			anchorLinks: { depth: 6 },
			toc: {
				depth: 5,
				searchDepth: 5,
			},
		},
	},
	tailwindcss: {
		cssPath: '~/assets/main.css',
	},
});
