<script setup lang="ts">
import { computed } from 'vue';
import { Recipe } from '../..//types';
const { recipe } = defineProps<{
  recipe: Recipe;
}>();

const exactMatch = computed(() => {
  return recipe.missedIngredientCount === 0 && recipe.unusedIngredients.length === 0;
})
</script>

<template>
  <div class="bg-white dark:bg-custNavyLight dark:text-gray-200 rounded-2xl overflow-hidden shadow">
    <div class="recipe-image">
      <picture>
        <img :src="recipe.image" class="w-full" />
      </picture>
    </div>
    <div class="recipe-content py-3 px-5">
      <h2 class="text-2xl font-bold">{{ recipe.title }}</h2>
      <div v-if="exactMatch">
        <p class="text-green-500">You have all the ingredients!</p>
      </div>
    </div>
  </div>
</template>

