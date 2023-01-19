import React, { createContext, useContext } from "react";
import { z } from "zod";
import { DATA } from "@data/index";

export const GameDataSchema = z.object({
  money: z.number().min(0),
  drinkPrice: z.number().min(0),
  drinksPerClick: z.number().min(0),
  drinksPerSecond: z.number().min(0),
  level: z.number().min(0).max(5),
  unlockedLevel: z.number().min(0).max(5),
  ingredients: z.record(z.number().min(0)),
  drinkUpgrades: z.record(z.number().min(0)),
  barUpgrades: z.record(z.number().min(0)),
  rocketLevel: z.number().min(0).max(4), // FIXME: @tomheaton if max in inclusive change '4' to '3'
});

export type GameData = z.infer<typeof GameDataSchema>;

export enum GameDataActions {
  LOAD = "load",
  INCREASE_MONEY = "increase_money",
  DECREASE_MONEY = "decrease_money",
  // TODO: @gonk increase by percentage too (instead of just flat rate)
  INCREASE_DRINK_PRICE = "increase_drink_price",
  // TODO: @gonk change this drink price to drink price multiplier
  INCREASE_DRINKS_PER_CLICK = "increase_drinks_per_click",
  INCREASE_DRINKS_PER_SECOND = "increase_drinks_per_second",
  SET_LEVEL = "set_level",
  UPGRADE_INGREDIENT = "upgrade_ingredient",
  UPGRADE_BAR = "upgrade_bar",
  UPGRADE_DRINK = "upgrade_drink",
  UPGRADE_ROCKET = "upgrade_rocket",
  RESET_ROCKET = "reset_rocket",
  // INCREASE_UPGRADE = "increase_upgrade",
  INCREASE_PLANETS_UNLOCKED = "increase_planets_unlocked",
  SET_ROCKET_LEVEL = "set_rocket_level",
}

type GameDataAction =
  | {
  type: Exclude<GameDataActions,
    | GameDataActions.LOAD
    | GameDataActions.UPGRADE_INGREDIENT
    | GameDataActions.UPGRADE_BAR
    | GameDataActions.UPGRADE_DRINK
    | GameDataActions.UPGRADE_ROCKET
    | GameDataActions.INCREASE_PLANETS_UNLOCKED 
    | GameDataActions.SET_ROCKET_LEVEL 
  >;
  payload: number;
} | {
  type: GameDataActions.LOAD;
  payload: GameData;
} | {
  type:
    | GameDataActions.UPGRADE_INGREDIENT
    | GameDataActions.UPGRADE_BAR
    | GameDataActions.UPGRADE_DRINK
    | GameDataActions.UPGRADE_ROCKET
    | GameDataActions.RESET_ROCKET
    | GameDataActions.INCREASE_PLANETS_UNLOCKED
    | GameDataActions.SET_ROCKET_LEVEL;
  payload: string;
  /*} | {
    type: GameDataActions.INCREASE_UPGRADE;
    payload: {
      group: "barUpgrades" | "drinkUpgrades" | "rocketUpgrades";
      name: keyof GameData["drinkUpgrades"] | keyof GameData["barUpgrades"] | keyof GameData["rocketUpgrades"];
    };*/
};

export const getInitialGameData = (): GameData => ({
  money: 100,
  drinksPerClick: 1,
  drinkPrice: 20,
  drinksPerSecond: 0,
  level: 0,
  rocketLevel: 0,
  unlockedLevel: 0,
  ingredients: (() => {
    const ingredients: Record<string, number> = {};

    DATA.ingredients.forEach((ingredient) => {
      ingredients[ingredient.texture] = 0;
    });

    return ingredients;
  })(),
  drinkUpgrades: (() => {
    const upgrades: Record<string, number> = {};

    Object.values(DATA.drinkUpgrades).forEach((value) => {
      value.map((upgrade) => {
        upgrades[upgrade.texture] = 0;
      });
    });

    return upgrades;
  })(),
  barUpgrades: (() => {
    const upgrades: Record<string, number> = {};

    Object.values(DATA.barUpgrades).forEach((value) => {
      value.map((upgrade) => {
        upgrades[upgrade.texture] = 0;
      });
    });

    return upgrades;
  })(),
});

export const gameDataReducer = (oldState: GameData, action: GameDataAction) => {
  let state: GameData;

  switch (action.type) {
    case GameDataActions.LOAD:
      state = {
        ...action.payload as GameData,
      };
      break;
    case GameDataActions.INCREASE_MONEY:
      state = {
        ...oldState,
        money: oldState.money + action.payload,
      };
      break;
    case GameDataActions.DECREASE_MONEY:
      state = {
        ...oldState,
        money: oldState.money - action.payload,
      };
      break;
    case GameDataActions.INCREASE_DRINK_PRICE:
      state = {
        ...oldState,
        drinkPrice: oldState.drinkPrice + action.payload,
      };
      break;
    case GameDataActions.INCREASE_DRINKS_PER_CLICK:
      state = {
        ...oldState,
        drinksPerClick: oldState.drinksPerClick + action.payload,
      };
      break;
    case GameDataActions.INCREASE_DRINKS_PER_SECOND:
      state = {
        ...oldState,
        drinksPerSecond: oldState.drinksPerSecond + action.payload,
      };
      break;
    case GameDataActions.SET_LEVEL:
      state = {
        ...oldState,
        level: action.payload,
      };
      break;
    case GameDataActions.UPGRADE_INGREDIENT:
      state = {
        ...oldState,
        ingredients: {
          ...oldState.ingredients,
          [action.payload]: oldState.ingredients[action.payload] + 1,
        },
      };
      break;
    case GameDataActions.UPGRADE_BAR:
      state = {
        ...oldState,
        barUpgrades: {
          ...oldState.barUpgrades,
          [action.payload]: oldState.barUpgrades[action.payload] + 1,
        },
      };
      break;
    case GameDataActions.UPGRADE_DRINK:
      state = {
        ...oldState,
        drinkUpgrades: {
          ...oldState.drinkUpgrades,
          [action.payload]: oldState.drinkUpgrades[action.payload] + 1,
        },
      };
      break;
    /*
    case GameDataActions.UPGRADE_ROCKET:
      state = {
        ...oldState,
        rocketUpgrades: {
          ...oldState.rocketUpgrades,
          [action.payload]: oldState.rocketUpgrades[action.payload] + 1,
        },
      };
      break;
    case GameDataActions.RESET_ROCKET:
      state = {
        ...oldState,
        rocketUpgrades: {
          ...oldState.rocketUpgrades,
          [action.payload]: 0,
        },
      };
      break;
    */
    case GameDataActions.INCREASE_PLANETS_UNLOCKED:
      state = {
        ...oldState,
        unlockedLevel: oldState.unlockedLevel + 1,
      };
      break;
    case GameDataActions.SET_ROCKET_LEVEL:
      state = {
        ...oldState,
        rocketLevel: action.payload,
      };
      break;
    // TODO: @tomheaton fix this
    /*case GameDataActions.INCREASE_UPGRADE:
      let payload = action.payload as {
        group: "barUpgrades" | "drinkUpgrades" | "rocketUpgrades";
        name: keyof GameData["drinkUpgrades"] | keyof GameData["barUpgrades"] | keyof GameData["rocketUpgrades"];
      };

      state = {
        ...oldState,
        [payload.group]: {
          ...oldState[payload.group],
          [payload.name]: oldState[payload.group][payload.name] + 1,
        },
      };
      break;*/
  }

  console.log("saving data");
  localStorage.setItem("gameData", JSON.stringify(state));

  return state;
};

type GameDataContextType = {
  data: GameData;
  dispatch: React.Dispatch<GameDataAction>;
};

export const GameDataContext = createContext<GameDataContextType | null>(null);

export const useGameData = () => {
  const context = useContext(GameDataContext);

  if (context === null) {
    throw new Error("useGameData must be used within a GameDataProvider");
  }

  return {
    ...context,
  };
};
