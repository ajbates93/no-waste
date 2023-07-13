// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  runtimeConfig: {
    public: {
      recipeAPIKey: process.env.SPOONACULAR_API_PUBLIC
    },
  },
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: true, 
    injectPosition: 0,
    viewer: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in'},
    head: {
          title: 'No Waste Here'
    }
  }
})
