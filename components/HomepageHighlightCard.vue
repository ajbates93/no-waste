<script setup lang="ts">
import { HomepageHighlightCard } from '~/types'

const { card } = defineProps<{
  card: HomepageHighlightCard
}>()

const colour = computed(() => {
  if (card.colour === 'custGreen') {
    return 'bg-custGreen'
  } else if (card.colour === 'custOrange') {
    return 'bg-custOrange'
  } else if (card.colour === 'custYellow') {
    return 'bg-custYellow'
  } else if (card.colour === 'custPurple') {
    return 'bg-custPurple'
  }
})

</script>

<template>
  <div class="bg-gray-200 dark:bg-custNavyLight p-7 rounded-2xl shadow">
    <div :class="colour" class="recipe-image dark:bg-custNavy inline-block rounded-xl p-3 text-white dark:text-custGreen">
      <Icon size="2em" :name="`iconoir-${card.icon}`"></Icon>
    </div>
    <div class="recipe-content py-3">
      <h2 class="text-2xl font-bold text-custGreen dark:text-gray-200 my-5">{{ card.title }}</h2>
      <p class="text-black dark:text-gray-400">{{ card.description }}</p>
    </div>
  </div>
</template>
