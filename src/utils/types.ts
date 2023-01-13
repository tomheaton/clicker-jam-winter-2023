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
};

// TODO: @Tufty62
export type Item = {};

export type Data = {
  ingredients: Ingredient[];
  drinks: Drink[];
  items: Item[];
};
