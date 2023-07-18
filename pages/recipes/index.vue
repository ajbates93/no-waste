<script setup lang="ts">
import { Recipe } from 'types';
import HomepageRecipeCard from '../../components/recipes/HomepageRecipeCard.vue'

const input = ref('')
const userIngredients = ref<string[]>([])
const showResults = ref(false)
const config = useRuntimeConfig()
const key = config.public.recipeAPIKey;

const recipesString = ref<Recipe[]>();
const handleAddIngredientClick = () => {
  userIngredients.value.push(input.value)
  input.value = ''
}
const handleSubmit = async () => {
  const ingredients = input.value.split(' ').join(',');
  const { data: recipes } = await useFetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${key}`)
  recipesString.value = recipes.value as Recipe[];
  showResults.value = true
}

</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="p-10 my-10 rounded-md bg-slate-100 dark:bg-custNavyLight">
      <h3 class="text-2xl font-bold mb-4 text-slate-600 dark:text-gray-200">Enter all the ingredients that you want to use up.</h3>
      <div class="text-lg text-slate-600 dark:text-gray-200 mb-6">We'll find recipes with an exact match, or the closest match possible.</div>
      <input class="border border-custNavy dark:text-gray-200 rounded-md py-2 px-4 mr-2 md:min-w-[500px] min-w-full 
        dark:bg-custNavyLightest" 
        v-model="input" @keyup.enter="handleAddIngredientClick" />
      <button class="bg-custGreen dark:bg-custGreen py-2 px-4 text-white dark:text-gray-200 border border-gray-200 rounded-md" 
        @click="handleAddIngredientClick">Add Ingredient</button>

      <div class="user-ingredients mt-5 flex gap-2">
        <div class="bg-custNavyLightest px-3 py-1 rounded-2xl text-gray-200 flex items-center gap-2" v-for="uIngredient, idx in userIngredients" :key="idx">
          <div>{{ uIngredient }}</div>
          <div class="text-xs text-gray-200 cursor-pointer" @click="userIngredients.splice(idx, 1)">
            <Icon name="iconoir-delete-circle" size="1rem" />
          </div>
        </div>  
      </div>
      <div v-if="userIngredients.length">
        <div class="text-lg text-slate-600 dark:text-gray-200 mt-5 font-bold">Added all your ingredients? Let's go!</div>
        <div class="mt-5">
          <button class="bg-green-500 dark:bg-custGreen py-2 px-4 text-white dark:text-gray-200 border border-gray-200 rounded-md" @click="handleSubmit">Submit</button>
        </div>
      </div>
    </div>
    <template v-if="showResults">
    <div class="mx-auto grid grid-cols-3 gap-5 pb-10" v-if="recipesString && recipesString.length > 0">
      <HomepageRecipeCard v-for="recipe, idx in recipesString" :recipe="recipe" />
    </div>
    <div class="bg-gray-200 dark:bg-custNavyLight p-10 rounded-3xl" v-else>
      <h3 class="text-2xl font-bold mb-4 text-slate-600 dark:text-gray-200">No recipes found.</h3>
      <div class="text-lg text-slate-600 dark:text-gray-200">Try entering different ingredients.</div>
    </div>
    </template>
  </div>
</template>
