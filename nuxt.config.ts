// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      recipeAPIKey: process.env.SPOONACULAR_API_PUBLIC
    }
  }
})
