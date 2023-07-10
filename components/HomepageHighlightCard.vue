<script setup lang="ts">
import { HomepageHighlightCard } from '~/types'

const { card } = defineProps<{
  card: HomepageHighlightCard
}>()

</script>

<template>
  <div>
    <div class="bg-white dark:bg-dark rounded shadow">
      <div class="recipe-image">
        <picture>
          <img :src="card.icon" class="w-full" />
        </picture>
      </div>
      <div class="recipe-content py-3 px-5">
        <h2 class="text-2xl font-bold">{{ card.title }}</h2>
        <p class="text-green-500">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>
