import { INGREDIENTS } from "../data";
import { Ingredient, Sound } from "./types";
import { GameData } from "@hooks/game_data";

export const getIngredients = (ingredientNames: string[]): Ingredient[] => {
  return INGREDIENTS.filter((ingredient) => {
    return ingredientNames.includes(ingredient.texture);
  });
};

export const playSound = async (sound: Sound) => {
  const audio = new Audio(`/assets/sounds/${sound}.mp3`);
  await audio.play();
};

export const getIngredientsUpgradedOnce = (drinkIngredients: Ingredient[], dataIngredients: GameData["ingredients"]): number => {
  let numberOfIngredientsUpgradedOnce = 0;

  drinkIngredients.forEach((ingredient) => {
    if (dataIngredients[ingredient.texture] > 0) {
      numberOfIngredientsUpgradedOnce += 1;
    }
  });

  console.log("number of ingredients upgraded once", numberOfIngredientsUpgradedOnce);
  return numberOfIngredientsUpgradedOnce;
};
