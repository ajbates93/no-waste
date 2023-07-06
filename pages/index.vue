<script setup lang="ts">
import HomepageRecipeCard from '@/components/recipes/HomepageRecipeCard.vue'

const input = ref('')
const config = useRuntimeConfig()
const key = config.public.recipeAPIKey;

const recipesString = ref();

const recipes = [
  {
    "id": 715594,
    "title": "Homemade Garlic and Basil French Fries",
    "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "missedIngredients": [
      {
        "id": 2044,
        "amount": 0.25,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Produce",
        "name": "basil",
        "original": "1/4 cup basil",
        "originalName": "basil",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-basil.jpg"
      },
      {
        "id": 1022020,
        "amount": 0.25,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Spices and Seasonings",
        "name": "garlic powder",
        "original": "1/4 garlic powder",
        "originalName": "garlic powder",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic-powder.png"
      }
    ],
    "usedIngredients": [
      {
        "id": 11352,
        "amount": 4,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "potatoes",
        "original": "4 sliced, fresh potatoes",
        "originalName": "sliced, fresh potatoes",
        "meta": [
          "fresh",
          "sliced"
        ],
        "extendedName": "fresh potatoes",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
      }
    ],
    "unusedIngredients": [],
    "likes": 1669
  },
  {
    "id": 641122,
    "title": "Curry Leaves Potato Chips",
    "image": "https://spoonacular.com/recipeImages/641122-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "missedIngredients": [
      {
        "id": 2009,
        "amount": 1,
        "unit": "tsp",
        "unitLong": "teaspoon",
        "unitShort": "tsp",
        "aisle": "Spices and Seasonings",
        "name": "chili powder",
        "original": "1 tsp plain chili powder",
        "originalName": "plain chili powder",
        "meta": [
          "plain"
        ],
        "extendedName": "plain chili powder",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg"
      },
      {
        "id": 93604,
        "amount": 3,
        "unit": "sprigs",
        "unitLong": "sprigs",
        "unitShort": "sprigs",
        "aisle": "Ethnic Foods",
        "name": "curry leaves",
        "original": "3-4 sprigs curry leaves",
        "originalName": "curry leaves",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/curry-leaves.jpg"
      }
    ],
    "usedIngredients": [
      {
        "id": 10011355,
        "amount": 3,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "potatoes - remove skin",
        "original": "3 potatoes - remove skin, sliced thinly and soaked in ice water for 10-15 minutes.",
        "originalName": "potatoes - remove skin, sliced thinly and soaked in ice water for 10-15 minutes",
        "meta": [
          "sliced",
          "for 10-15 minutes."
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-potatoes.jpg"
      }
    ],
    "unusedIngredients": [],
    "likes": 4
  },
  {
    "id": 1099404,
    "title": "Pan Fried Potato Wedges",
    "image": "https://spoonacular.com/recipeImages/1099404-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "missedIngredients": [
      {
        "id": 1022020,
        "amount": 1,
        "unit": "tsp",
        "unitLong": "teaspoon",
        "unitShort": "tsp",
        "aisle": "Spices and Seasonings",
        "name": "garlic powder",
        "original": "1 tsp garlic powder",
        "originalName": "garlic powder",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic-powder.png"
      },
      {
        "id": 2026,
        "amount": 1,
        "unit": "tsp",
        "unitLong": "teaspoon",
        "unitShort": "tsp",
        "aisle": "Spices and Seasonings",
        "name": "onion powder",
        "original": "1 tsp onion powder",
        "originalName": "onion powder",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/onion-powder.jpg"
      }
    ],
    "usedIngredients": [
      {
        "id": 10011355,
        "amount": 4,
        "unit": "large",
        "unitLong": "larges",
        "unitShort": "large",
        "aisle": "Produce",
        "name": "potatoes",
        "original": "4 large red potatoes washed and cut into wedges",
        "originalName": "red potatoes washed and cut into wedges",
        "meta": [
          "red",
          "washed and cut into wedges"
        ],
        "extendedName": "red potatoes",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/red-potatoes.jpg"
      }
    ],
    "unusedIngredients": [],
    "likes": 4
  },
  {
    "id": 654213,
    "title": "Oven Potatoes",
    "image": "https://spoonacular.com/recipeImages/654213-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "missedIngredients": [
      {
        "id": 11215,
        "amount": 2,
        "unit": "cloves",
        "unitLong": "cloves",
        "unitShort": "cloves",
        "aisle": "Produce",
        "name": "garlic",
        "original": "2 cloves of Garlic – Minced (I use my garlic press)",
        "originalName": "Garlic – Minced (I use my garlic press)",
        "meta": [
          "minced",
          "(I use my garlic press)"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
      },
      {
        "id": 11282,
        "amount": 0.5,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "onion",
        "original": "1/2 Onion – Minced",
        "originalName": "Onion – Minced",
        "meta": [
          "minced"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
      }
    ],
    "usedIngredients": [
      {
        "id": 11352,
        "amount": 6,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "potatoes",
        "original": "6 Medium Size Potatoes (washed and cut into cubes)",
        "originalName": "Medium Size Potatoes (washed and cut into cubes)",
        "meta": [
          "washed and cut into cubes)"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
      }
    ],
    "unusedIngredients": [],
    "likes": 1
  },
  {
    "id": 654679,
    "title": "Parmesan Mashed Potatoes",
    "image": "https://spoonacular.com/recipeImages/654679-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [
      {
        "id": 4073,
        "amount": 0.25,
        "unit": "cup",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Milk, Eggs, Other Dairy",
        "name": "butter",
        "original": "1/4 cup Butter or margarine",
        "originalName": "Butter or margarine",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
      },
      {
        "id": 1053,
        "amount": 1.5,
        "unit": "cups",
        "unitLong": "cups",
        "unitShort": "cup",
        "aisle": "Milk, Eggs, Other Dairy",
        "name": "cream",
        "original": "1 1/2 cups cream",
        "originalName": "cream",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg"
      },
      {
        "id": 1032,
        "amount": 1,
        "unit": "cup",
        "unitLong": "cup",
        "unitShort": "cup",
        "aisle": "Cheese",
        "name": "parmesan cheese",
        "original": "1 cup grated Parmesan cheese",
        "originalName": "grated Parmesan cheese",
        "meta": [
          "grated"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
      }
    ],
    "usedIngredients": [
      {
        "id": 11353,
        "amount": 2,
        "unit": "pounds",
        "unitLong": "pounds",
        "unitShort": "lb",
        "aisle": "Produce",
        "name": "russet potatoes",
        "original": "2 pounds russet potatoes, peeled and cubed",
        "originalName": "russet potatoes, peeled and cubed",
        "meta": [
          "cubed",
          "peeled"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/russet-or-idaho-potatoes.png"
      }
    ],
    "unusedIngredients": [],
    "likes": 9
  },
  {
    "id": 646337,
    "title": "Hasselback Potatoes",
    "image": "https://spoonacular.com/recipeImages/646337-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [
      {
        "id": 18079,
        "amount": 2,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Pasta and Rice",
        "name": "breadcrumbs",
        "original": "2 tablespoons breadcrumbs",
        "originalName": "breadcrumbs",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg"
      },
      {
        "id": 1001,
        "amount": 8,
        "unit": "servings",
        "unitLong": "servings",
        "unitShort": "servings",
        "aisle": "Milk, Eggs, Other Dairy",
        "name": "butter",
        "original": "melted butter",
        "originalName": "melted butter",
        "meta": [
          "melted"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
      },
      {
        "id": 1032,
        "amount": 2,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Cheese",
        "name": "parmesan cheese",
        "original": "2 tablespoons grated Parmesan cheese",
        "originalName": "grated Parmesan cheese",
        "meta": [
          "grated"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
      }
    ],
    "usedIngredients": [
      {
        "id": 11352,
        "amount": 6,
        "unit": "medium",
        "unitLong": "mediums",
        "unitShort": "medium",
        "aisle": "Produce",
        "name": "potatoes",
        "original": "6 mediums potatoes, peeled",
        "originalName": "s potatoes, peeled",
        "meta": [
          "peeled"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
      }
    ],
    "unusedIngredients": [],
    "likes": 2
  },
  {
    "id": 651225,
    "title": "Mashed Potatoes with Garlic, Sage & Goat Cheese",
    "image": "https://spoonacular.com/recipeImages/651225-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [
      {
        "id": 11215,
        "amount": 1,
        "unit": "tsp",
        "unitLong": "teaspoon",
        "unitShort": "tsp",
        "aisle": "Produce",
        "name": "garlic",
        "original": "1 tsp. garlic ( minced)",
        "originalName": "garlic ( minced)",
        "meta": [
          "minced",
          "( )"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
      },
      {
        "id": 1159,
        "amount": 5.3,
        "unit": "oz",
        "unitLong": "ounces",
        "unitShort": "oz",
        "aisle": "Cheese",
        "name": "chavrie goat cheese pyramid",
        "original": "1 (5.3 oz.) Chavrie Goat Cheese Pyramid, Original",
        "originalName": "Chavrie Goat Cheese Pyramid, Original",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg"
      },
      {
        "id": 99226,
        "amount": 1,
        "unit": "tsp",
        "unitLong": "teaspoon",
        "unitShort": "tsp",
        "aisle": "Produce",
        "name": "sage",
        "original": "1 /4 tsp sage",
        "originalName": "sage",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/fresh-sage.png"
      }
    ],
    "usedIngredients": [
      {
        "id": 11353,
        "amount": 3,
        "unit": "medium size",
        "unitLong": "medium sizes",
        "unitShort": "medium size",
        "aisle": "Produce",
        "name": "ea. baking potatoes",
        "original": "3 ea. medium size baking potatoes (peeled and cut in 1 inch pieces)",
        "originalName": "ea. medium size baking potatoes (peeled and cut in 1 inch pieces)",
        "meta": [
          "peeled",
          "cut in 1 inch pieces)"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/russet-or-idaho-potatoes.png"
      }
    ],
    "unusedIngredients": [],
    "likes": 2
  },
  {
    "id": 660032,
    "title": "Shrimps and Patatas Bravas",
    "image": "https://spoonacular.com/recipeImages/660032-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [
      {
        "id": 10211215,
        "amount": 6,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "garlic cloves",
        "original": "6 Garlic cloves, finely minced or pressed",
        "originalName": "Garlic cloves, finely minced or pressed",
        "meta": [
          "finely minced",
          "pressed"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.jpg"
      },
      {
        "id": 11297,
        "amount": 2,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce;Spices and Seasonings",
        "name": "hands of parsley",
        "original": "2 hands of parsley",
        "originalName": "hands of parsley",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg"
      },
      {
        "id": 15270,
        "amount": 20,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Seafood",
        "name": "shrimp tails",
        "original": "20 shrimp tails",
        "originalName": "shrimp tails",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/shrimp.png"
      }
    ],
    "usedIngredients": [
      {
        "id": 11352,
        "amount": 8,
        "unit": "small",
        "unitLong": "smalls",
        "unitShort": "small",
        "aisle": "Produce",
        "name": "potatoes",
        "original": "8 smalls potatoes",
        "originalName": "s potatoes",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
      }
    ],
    "unusedIngredients": [],
    "likes": 1
  },
  {
    "id": 644885,
    "title": "Gluten Free Vegan Gnocchi",
    "image": "https://spoonacular.com/recipeImages/644885-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [
      {
        "id": 93658,
        "amount": 2,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Health Foods;Baking",
        "name": "ener-g egg replacer",
        "original": "2 tablespoons Ener-G egg replacer, prepared according to package directions",
        "originalName": "Ener-G egg replacer, prepared according to package directions",
        "meta": [
          "prepared"
        ],
        "extendedName": "cooked ener-g egg replacer",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
      },
      {
        "id": 16157,
        "amount": 2,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Gluten Free;Ethnic Foods;Health Foods",
        "name": "chickpea flour",
        "original": "2 tablespoons chickpea flour",
        "originalName": "chickpea flour",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/chickpea-flour-or-another-gluten-free-flour.jpg"
      },
      {
        "id": 11413,
        "amount": 3,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Baking",
        "name": "potato starch",
        "original": "3 tablespoons potato starch",
        "originalName": "potato starch",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg"
      }
    ],
    "usedIngredients": [
      {
        "id": 10211362,
        "amount": 1,
        "unit": "pound",
        "unitLong": "pound",
        "unitShort": "lb",
        "aisle": "Produce",
        "name": "yukon gold potatoes",
        "original": "1 pound large Yukon Gold potatoes, scrubbed well",
        "originalName": "Yukon Gold potatoes, scrubbed well",
        "meta": [
          "scrubbed",
          "well"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
      }
    ],
    "unusedIngredients": [],
    "likes": 1
  },
  {
    "id": 653611,
    "title": "Old-Fashioned Potato Salad",
    "image": "https://spoonacular.com/recipeImages/653611-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 3,
    "missedIngredients": [
      {
        "id": 11291,
        "amount": 3,
        "unit": "",
        "unitLong": "",
        "unitShort": "",
        "aisle": "Produce",
        "name": "green onions",
        "original": "3 green onions, rinsed",
        "originalName": "green onions, rinsed",
        "meta": [
          "rinsed"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
      },
      {
        "id": 11945,
        "amount": 2,
        "unit": "tablespoons",
        "unitLong": "tablespoons",
        "unitShort": "Tbsp",
        "aisle": "Condiments",
        "name": "pickle relish",
        "original": "2 tablespoons sweet pickle relish or 3 sweet gherkins, minced",
        "originalName": "sweet pickle relish or 3 sweet gherkins, minced",
        "meta": [
          "sweet",
          "minced"
        ],
        "extendedName": "sweet pickle relish",
        "image": "https://spoonacular.com/cdn/ingredients_100x100/pickle-relish.png"
      },
      {
        "id": 11143,
        "amount": 2,
        "unit": "stalks",
        "unitLong": "stalks",
        "unitShort": "stalks",
        "aisle": "Produce",
        "name": "celery",
        "original": "2 stalks celery",
        "originalName": "celery",
        "meta": [],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/celery.jpg"
      }
    ],
    "usedIngredients": [
      {
        "id": 11353,
        "amount": 6,
        "unit": "large",
        "unitLong": "larges",
        "unitShort": "large",
        "aisle": "Produce",
        "name": "russet potatoes",
        "original": "6 large russet potatoes, scrubbed",
        "originalName": "russet potatoes, scrubbed",
        "meta": [
          "scrubbed"
        ],
        "image": "https://spoonacular.com/cdn/ingredients_100x100/russet-or-idaho-potatoes.png"
      }
    ],
    "unusedIngredients": [],
    "likes": 1
  }
]

const handleSubmit = async () => {
  const ingredients = input.value.split(' ').join(',');
  const { data: recipes } = await useFetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input.value}&apiKey=${key}`)
  recipesString.value = recipes.value;
}

</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <h1 class="my-10 text-5xl text-green-700 font-bold text-center">No Waste Here!</h1>
    <div class="p-10 my-10 border rounded-md bg-slate-100">
      <h3 class="text-2xl font-bold mb-4 text-slate-600">Enter all the ingredients that you want to use up.</h3>
      <div class="text-lg text-slate-600 mb-6">We'll find recipes with an exact match, or the closest match possible.</div>
      <input class="border rounded-md py-2 px-4 mr-2 md:min-w-[500px] min-w-full" v-model="input" />
      <button class="bg-green-500 py-2 px-4 text-white rounded-md" @click="handleSubmit">Submit</button>
    </div>
    <div class="mx-auto grid grid-cols-3 gap-5">
      <HomepageRecipeCard v-for="recipe, idx in recipes" :recipe="recipe" />
    </div>
  </div>
</template>
