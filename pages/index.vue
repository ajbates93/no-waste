<script setup lang="ts">
import type { HomepageHighlightCard } from '../types'

const highlights: HomepageHighlightCard[] = [
  {
    id: 0,
    title: 'Community',
    description: 'We are a community of people who are passionate about reducing food waste.',
    icon: 'group'
  },
  {
    id: 1,
    title: 'Community',
    description: 'Share your recipes with the community and help others reduce food waste.',
    icon: 'group'
  },
  {
    id: 2,
    title: 'Find Recipes',
    description: 'Find recipes that use ingredients you have on hand.',
    icon: 'numbered-list-left'
  }
]
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="flex justify-between items-start">
      <div class="w-4/6 mr-10">
        <h1 class="mt-10 mb-10 text-7xl text-custGreen font-bold text-left"><span class="text-gray-200 mr-3">No</span><span class="text-custGreen mr-3">Waste</span><span class="text-white mr-3">Here!</span></h1>
        <h3 class="my-10 text-3xl text-gray-400 font-bold text-left">List the remaining ingredients in your fridge and find recipes that match exactly what you've got.</h3>
        <div class="flex my-10 gap-5">
          <nuxt-link class="bg-gray-200 text-custNavy py-3 px-6 rounded-3xl font-bold" to="/recipes">Find Recipes</nuxt-link>
          <nuxt-link class="bg-custNavyLight border border-custGreen text-gray-200 py-3 px-6 rounded-3xl font-bold" to="/get-involved">Get Involved</nuxt-link>
        </div>
      </div>
      <div class="w-2/6 mb-10">
        <picture>
          <img src="/fruitveg.svg" class="w-full" />
        </picture>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <HomepageHighlightCard v-for="card in highlights" :key="card.title" :card="card" />
    </div>
 </div>
</template>