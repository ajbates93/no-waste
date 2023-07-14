<script setup lang="ts">
import type { HomepageHighlightCard } from '../types'

const highlights: HomepageHighlightCard[] = [
  {
    id: 0,
    title: 'Inspire',
    description: 'Inspire home cooks to eliminate fridge food waste with creative recipes.',
    icon: 'light-bulb-on',
    colour: 'custGreen'
  },
  {
    id: 1,
    title: 'Transform',
    description: 'Help families reduce food waste by transforming leftovers and expiring foods into meals.',
    icon: 'repeat',
    colour: 'custOrange'
  },
  {
    id: 2,
    title: 'Equip',
    description: 'Equip home cooks with creative skills to transform ingredients and reduce waste.',
    icon: 'tools',
    colour: 'custPurple'
  },
  {
    id: 3,
    title: 'Connect',
    description: 'Connect you to recipes that creatively minimize unused groceries.',
    icon: 'link',
    colour: 'custYellow'
  }
]
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="py-10 flex justify-between items-start">
      <div class="w-4/6 mr-10">
        <h1 class="mt-10 mb-10 text-7xl text-custGreen font-bold text-left"><span class="text-custGreenLight dark:text-gray-200 mr-3">No</span><span class="text-custGreen mr-3">Waste</span><span class="dark:text-gray-200 mr-3">Here!</span></h1>
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
    <div class="grid grid-cols-2 items-stretch sm:grid-cols-4 gap-5">
      <HomepageHighlightCard v-for="card in highlights" :key="card.title" :card="card" />
    </div>
 </div>
</template>