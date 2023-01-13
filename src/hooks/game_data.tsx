import { createContext } from "react";

type GameData = {
  score: number;
  money: number;
};

export enum GameDataActions {
  ADD_MONEY = "add_money",
  SUBTRACT_MONEY = "subtract_money",
}

type GameDataAction = {
  type: GameDataActions;
  value: number;
};

export const initialGameData: GameData = {
  score: 69,
  money: 420,
};

export const gameDataReducer = (
  oldState: GameData,
  action: GameDataAction
) => {
  let state: GameData;

  switch (action.type) {
    case GameDataActions.ADD_MONEY:
      console.log("adding money");

      state = {
        ...oldState,
        money: oldState.money + action.value,
      };
      break;
    case GameDataActions.SUBTRACT_MONEY:
      console.log("subtracting money");
      state = {
        ...oldState,
        money: oldState.money - action.value,
      };
      break;
  }

  console.log("saving data");
  localStorage.setItem("gameData", JSON.stringify(state));

  return state;
};

export const GameDataContext = createContext<GameData | null>(null);
export const GameDataDispatchContext =
  createContext<React.Dispatch<GameDataAction> | null>(null);
