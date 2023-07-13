<script setup lang="ts">
import { HomepageHighlightCard } from '~/types'

const { card } = defineProps<{
  card: HomepageHighlightCard
}>()

</script>

<template>
  <div class="bg-custPale dark:bg-custNavyLight p-7 rounded-2xl shadow">
    <div class="recipe-image bg-white dark:bg-custNavy inline-block rounded-xl p-3 text-custGreen">
      <Icon size="2em" :name="`iconoir-${card.icon}`"></Icon>
    </div>
    <div class="recipe-content py-3">
      <h2 class="text-2xl font-bold text-custGreen dark:text-gray-200 my-5">{{ card.title }}</h2>
      <p class="text-black dark:text-gray-400">{{ card.description }}</p>
    </div>
  </div>
</template>
