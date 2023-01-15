import { INGREDIENTS } from "../data";
import { Ingredient, Sound } from "./types";

export const getIngredients = (ingredientNames: string[]): Ingredient[] => {
  return INGREDIENTS.filter((ingredient) => {
    return ingredientNames.includes(ingredient.texture);
  });
};

export const playSound = async (sound: Sound) => {
  const audio = new Audio(`/assets/sounds/${sound}.mp3`);
  await audio.play();
}
