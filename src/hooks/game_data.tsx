import { createContext } from "react";

type GameData = {
  money: number;
  drinkPrice: number;
  drinksPerClick: number;
  drinksPerSecond: number;
};

export enum GameDataActions {
  SET_MONEY = "set_money",
  ADD_MONEY = "add_money",
  SUBTRACT_MONEY = "subtract_money",

  // TODO: @gonk increase by percentage too (instead of just flat rate)
  INCREASE_DRINK_PRICE = "increase_drink_price",
  // TODO: @gonk change this drink price to drink price multiplier
  SET_DRINK_PRICE = "set_drink_price",
  INCREASE_DRINKS_PER_CLICK = "increase_drinks_per_click",
  SET_DRINKS_PER_CLICK = "set_drinks_per_click",
  INCREASE_DRINKS_PER_SECOND = "increase_drinks_per_second",
  SET_DRINKS_PER_SECOND = "set_drinks_per_second",
}

type GameDataAction = {
  type: GameDataActions;
  value: number;
};

export const initialGameData: GameData = {
  money: 100,
  drinksPerClick: 1,
  drinkPrice: 20,
  drinksPerSecond: 0,
};

export const gameDataReducer = (oldState: GameData, action: GameDataAction) => {
  let state: GameData;

  switch (action.type) {
    case GameDataActions.SET_MONEY:
      return {
        ...oldState,
        money: action.value,
      };
    case GameDataActions.ADD_MONEY:
      state = {
        ...oldState,
        money: oldState.money + action.value,
      };
      break;
    case GameDataActions.SUBTRACT_MONEY:
      state = {
        ...oldState,
        money: oldState.money - action.value,
      };
      break;

    case GameDataActions.INCREASE_DRINK_PRICE:
      state = {
        ...oldState,
        drinkPrice: oldState.drinkPrice + action.value,
      };
      break;
    case GameDataActions.SET_DRINK_PRICE :
      return {
        ...oldState,
        drinkPrice: action.value,
      };

    case GameDataActions.INCREASE_DRINKS_PER_CLICK:
      state = {
        ...oldState,
        drinksPerClick: oldState.drinksPerClick + action.value,
      };
      break;
    case GameDataActions.SET_DRINKS_PER_CLICK:
      return {
        ...oldState,
        drinksPerClick: action.value,
      };

    case GameDataActions.INCREASE_DRINKS_PER_SECOND:
      state = {
        ...oldState,
        drinksPerSecond: oldState.drinksPerSecond + action.value,
      };
      break;
    case GameDataActions.SET_DRINKS_PER_SECOND:
      return {
        ...oldState,
        drinksPerSecond: action.value,
      };

  }

  console.log("saving data");
  localStorage.setItem("gameData", JSON.stringify(state));

  return state;
};

export const GameDataContext = createContext<GameData | null>(null);
export const GameDataDispatchContext =
  createContext<React.Dispatch<GameDataAction> | null>(null);
