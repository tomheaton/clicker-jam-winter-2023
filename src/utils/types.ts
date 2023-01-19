import { MUSIC, PLANETS, SOUNDS } from "@data/index";
import { GameDataActions } from "@hooks/game_data";

export type Ingredient = {
  name: string;
  texture: string;
  upgradeCosts: number[];
  upgradeDescriptions: string[];
};

export type Drink = {
  name: string;
  texture: string;
  ingredients: Ingredient[];
  cooldown: number;
};

export type Upgrades = {
  name: string;
  texture: string;
  description: string;
  costs: number[];
  flatIncrease: boolean; // 1: the upgrade increases the drinks/click at a flat rate, 0: it's a multiplier
  increases: number[];
  upgradeType: GameDataActions.UPGRADE_DRINK | GameDataActions.UPGRADE_BAR;
};

export type Planet = typeof PLANETS[number];

export type Music = typeof MUSIC[number];

export type Sound = typeof SOUNDS[number];

export type Data = {
  ingredients: Ingredient[];
  drinks: Drink[];
  music: Music[];
  sounds: Sound[];
  planets: typeof PLANETS;
};

export type Marker = {
  money: number;
  location: string;
}
