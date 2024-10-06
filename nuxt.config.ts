// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      htmlAttrs: {
        lang: 'pt-BR',
      },
      noscript: [
        {
          children:
            'Este site não funciona corretamente sem que o JavaScript esteja habilitado em seu navegador',
        },
      ],
    },
  },
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
  experimental: {
    typedPages: true,
  },
  compatibilityDate: '2024-10-05',
});
