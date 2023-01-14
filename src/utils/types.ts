import { MUSIC, PLANETS, SOUNDS } from "../data";

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

// TODO: change this to rocket upgrades type
export type Item = {
  name: string;
  texture: string;
  itemCost: number;
  itemDescription: string;
};

export type Upgrades = {
  name: string;
  texture: string;
  description: string;
  costs: number[];
  flatIncrease: boolean; // 1: the upgrade increases the drinks/click at a flat rate, 0: it's a multiplier
  increases: number[];
};

export type Planet = typeof PLANETS[number];

export type Music = typeof MUSIC[number];

export type Sound = typeof SOUNDS[number];

export type Data = {
  ingredients: Ingredient[];
  drinks: Drink[];
  items: Item[];
  music: Music[];
  sounds: Sound[];
  planets: typeof PLANETS;
};
