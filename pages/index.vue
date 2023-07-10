<script setup lang="ts">
import { HomepageHighlightCard } from '../types'

const highlights = [
  {
    title: 'Community',
    description: 'We are a community of people who are passionate about reducing food waste.',
    icon: '/images/food-waste.jpg'
  },
  {
    title: 'Share Your Recipes',
    description: 'Share your recipes with the community and help others reduce food waste.',
    icon: '/images/recipe.jpg'
  },
  {
    title: 'Find Recipes',
    description: 'Find recipes that use ingredients you have on hand.',
    icon: '/images/ingredients.jpg'
  }
]
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <h1 class="my-10 text-5xl text-green-700 font-bold text-center">No Waste Here!</h1>

    <HomepageHighlightCard v-for="card in highlights" :key="card.title" :card="card" />
 </div>
</template>