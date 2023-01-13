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

export type Data = {
  ingredients: Ingredient[];
  drinks: Drink[];
};
