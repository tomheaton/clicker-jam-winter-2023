import { INGREDIENTS } from "../data";
import { Ingredient } from "./types";

export const getIngredients = (ingredientNames: string[]): Ingredient[] => {
  return INGREDIENTS.filter((ingredient) => {
    return ingredientNames.includes(ingredient.texture);
  });
};
