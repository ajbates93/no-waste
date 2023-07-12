<script setup lang="ts">
import { HomepageHighlightCard } from '~/types'

const { card } = defineProps<{
  card: HomepageHighlightCard
}>()

</script>

<template>
  <div>
    <div class="bg-white dark:bg-custNavyLight py-2 px-7 rounded-2xl shadow">
      <div class="recipe-image text-custGreen mt-5">
        <Icon size="2em" :name="`iconoir-${card.icon}`"></Icon>
      </div>
      <div class="recipe-content py-3">
        <h2 class="text-3xl font-bold dark:text-gray-200 my-5">{{ card.title }}</h2>
        <p class="text-green-500 dark:text-gray-400">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>
