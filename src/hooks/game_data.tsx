import React, { createContext, useContext } from "react";
import { z } from "zod";
import { INGREDIENTS } from "@data/index";

type GameDataOld = {
  money: number;
  drinkPrice: number;
  drinksPerClick: number;
  drinksPerSecond: number;
  level: number;
  ingredients: { [key: string]: number; };
  // ingredients: { name: string, level: number }[];
};

export const GameDataSchema = z.object({
  money: z.number().min(0),
  drinkPrice: z.number().min(0),
  drinksPerClick: z.number().min(0),
  drinksPerSecond: z.number().min(0),
  level: z.number().min(0),
  ingredients: z.record(z.number().min(0)),
  // ingredients: z.array(z.object({})),
});

type GameData = z.infer<typeof GameDataSchema>;

// type GameData = GameDataOld;

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
}

type GameDataAction = {
  type: Exclude<GameDataActions, [GameDataActions.LOAD, GameDataActions.UPGRADE_INGREDIENT]>;
  payload: number;
} | {
  type: GameDataActions.LOAD;
  payload: GameData;
} | {
  type: GameDataActions.UPGRADE_INGREDIENT;
  payload: string;
};

export const initialGameData: GameData = {
  money: 100,
  drinksPerClick: 1,
  drinkPrice: 20,
  drinksPerSecond: 0,
  level: 0,
  ingredients: (() => {
    const ingredients: Record<string, number> = {};

    INGREDIENTS.forEach((ingredient) => {
      ingredients[ingredient.texture] = 0;
    });

    return ingredients;
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
