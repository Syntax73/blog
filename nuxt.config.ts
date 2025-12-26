// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@vueuse/nuxt',
		'@nuxtjs/tailwindcss',
		'@nuxt/icon',
	],
	content: {
		renderer: {
			anchorLinks: {
				h1: true,
				h2: true,
				h3: true,
				h4: true,
				h5: true,
				h6: true,
			},
		},
		build: {
			markdown: {
				toc: {
					depth: 5,
					searchDepth: 5,
				},
			},
		},
	},
	tailwindcss: {
		cssPath: '~/assets/main.css',
	},
	experimental: {
		typedPages: true,
	},
	compatibilityDate: '2024-10-05',
});
