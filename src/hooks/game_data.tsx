import React, { createContext } from "react";
import { z } from "zod";

type GameDataOld = {
  money: number;
  drinkPrice: number;
  drinksPerClick: number;
  drinksPerSecond: number;
  level: number;
};

export const GameDataSchema = z.object({
  money: z.number().min(0),
  drinkPrice: z.number().min(0),
  drinksPerClick: z.number().min(0),
  drinksPerSecond: z.number().min(0),
  level: z.number().min(0),
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
}

type GameDataAction = {
  type: Exclude<GameDataActions, GameDataActions.LOAD>;
  payload: number;
} | {
  type: GameDataActions.LOAD;
  payload: GameData;
}

export const initialGameData: GameData = {
  money: 100,
  drinksPerClick: 1,
  drinkPrice: 20,
  drinksPerSecond: 0,
  level: 0,
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
