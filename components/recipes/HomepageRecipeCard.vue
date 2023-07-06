<script setup lang="ts">
import { computed } from 'vue';

const { recipe } = defineProps<{
  recipe: Recipe;
}>();

const exactMatch = computed(() => {
  return recipe.missedIngredientCount === 0 && recipe.unusedIngredients.length === 0;
})
</script>

<template>
  <div class="bg-white rounded shadow">
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

