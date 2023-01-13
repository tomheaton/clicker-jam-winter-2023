
export type Ingredient = {
  name: string;
  texture: string;
  upgradeCosts: number[];
  upgradeDescriptions: string[];
};

export type Drink = {
  name: string;
  texture: string;
  cooldown: number;
  ingredients: Ingredient[];
};

// TODO: @tomheaton
// export type Planet = typeof PLANETS[number];
// export type Planet = string;

export type Item = {
  name: string;
  texture: string;
  itemCost: number;
  itemDescription: string;
};

export type Data = {
  ingredients: Ingredient[];
  drinks: Drink[];
  items: Item[];
  // TODO: @tomheaton
  // planets: Planet[];
};
