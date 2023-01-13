import { INGREDIENTS } from "../data";

export type Ingredient = {
  name: string;
  texture: string;
  upgradeCosts: number[];
  upgradeDescriptions: string[];
};

// type IngredientName = keyof typeof INGREDIENTS[number]["name"];

export type Drink = {
  name: string;
  texture: string;
  cooldown: number;
  // ingredients: IngredientName[];
  ingredients: string[];
};

// TODO: @tomheaton
// export type Planet = typeof PLANETS[number];
// export type Planet = string;

// TODO: @Tufty62
export type Item = {};

export type Data = {
  ingredients: Ingredient[];
  drinks: Drink[];
  items: Item[];
  // TODO: @tomheaton
  // planets: Planet[];
};
