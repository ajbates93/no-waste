export type Recipe = {
  id: number,
  title: string,
  image: string,
  imageType: string,
  usedIngredientCount: number,
  missedIngredientCount: number,
  missedIngredients: Ingredient[],
  usedIngredients: Ingredient[],
  unusedIngredients: Ingredient[],
  likes: number
}

export type Ingredient = {
  id: number,
  amount: number,
  unit: string,
  unitShort: string,
  unitLong: string,
  aisle: string,
  name: string,
  original: string,
  originalName: string,
  meta: string[],
  extendedName?: string,
  image: string
}

export type HomepageHighlightCard = {
  id: number,
  icon: string,
  title: string,
  description: string
}

