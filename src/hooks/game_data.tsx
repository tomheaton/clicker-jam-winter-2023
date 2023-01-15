import React, { createContext, useContext } from "react";
import { z } from "zod";
import { DATA } from "@data/index";

export const GameDataSchema = z.object({
  money: z.number().min(0),
  drinkPrice: z.number().min(0),
  drinksPerClick: z.number().min(0),
  drinksPerSecond: z.number().min(0),
  level: z.number().min(0),
  ingredients: z.record(z.number().min(0)),
  clickableUpgrades: z.record(z.number().min(0)),
  barUpgrades: z.record(z.number().min(0)),
  rocketUpgrades: z.record(z.number().min(0)),
});

type GameData = z.infer<typeof GameDataSchema>;

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
  UPGRADE_CLICKABLE = "upgrade_clickable",
  UPGRADE_ROCKET = "upgrade_rocket",
  INCREASE_UPGRADE = "increase_upgrade",
}

type GameDataAction = {
  type: Exclude<GameDataActions, [
    GameDataActions.LOAD,
    GameDataActions.UPGRADE_INGREDIENT,
    GameDataActions.INCREASE_UPGRADE
  ]>;
  payload: number;
} | {
  type: GameDataActions.LOAD;
  payload: GameData;
} | {
  type: GameDataActions.UPGRADE_INGREDIENT;
  payload: string;
} | {
  type: GameDataActions.INCREASE_UPGRADE;
  payload: {
    group: "barUpgrades" | "clickableUpgrades" | "rocketUpgrades";
    name: keyof GameData["clickableUpgrades"] | keyof GameData["barUpgrades"] | keyof GameData["rocketUpgrades"];
  };
};

export const initialGameData: GameData = {
  money: 100,
  drinksPerClick: 1,
  drinkPrice: 20,
  drinksPerSecond: 0,
  level: 0,
  ingredients: (() => {
    const ingredients: Record<string, number> = {};

    DATA.ingredients.forEach((ingredient) => {
      ingredients[ingredient.texture] = 0;
    });

    return ingredients;
  })(),
  clickableUpgrades: (() => {
    const upgrades: Record<string, number> = {};

    Object.values(DATA.clickableUpgrades).forEach((value) => {
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
  rocketUpgrades: (() => {
    const upgrades: Record<string, number> = {};

    DATA.items.forEach((upgrade) => {
      upgrades[upgrade.texture] = 0;
    });

    return upgrades;
  })(),
};

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
    case GameDataActions.UPGRADE_CLICKABLE:
      state = {
        ...oldState,
        clickableUpgrades: {
          ...oldState.clickableUpgrades,
          [action.payload]: oldState.clickableUpgrades[action.payload] + 1,
        },
      };
      break;
    case GameDataActions.UPGRADE_ROCKET:
      state = {
        ...oldState,
        rocketUpgrades: {
          ...oldState.rocketUpgrades,
          [action.payload]: oldState.rocketUpgrades[action.payload] + 1,
        },
      };
      break;
    // TODO: @tomheaton fix this
    case GameDataActions.INCREASE_UPGRADE:
      let payload = action.payload as {
        group: "barUpgrades" | "clickableUpgrades" | "rocketUpgrades";
        name: keyof GameData["clickableUpgrades"] | keyof GameData["barUpgrades"] | keyof GameData["rocketUpgrades"];
      };

      state = {
        ...oldState,
        [payload.group]: {
          ...oldState[payload.group],
          [payload.name]: oldState[payload.group][payload.name] + 1,
        },
      };
      break;
  }

  console.log("saving data");
  localStorage.setItem("gameData", JSON.stringify(state));

  return state;
};

type GameDataContextType = {
  data: GameData;
  dispatch: React.Dispatch<GameDataAction>;
};

export const GameDataContext = createContext<GameDataContextType>({} as GameDataContextType);

export const useGameData = () => {
  const { data: gameData, dispatch } = useContext(GameDataContext);
  return {
    gameData,
    dispatch,
  };
};
