import { createContext } from "react";

type GameDataType = {
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

export const initialGameData: GameDataType = {
  score: 69,
  money: 420,
};

export const gameDataReducer = (
  state: GameDataType,
  action: GameDataAction
) => {
  switch (action.type) {
    case GameDataActions.ADD_MONEY:
      return {
        ...state,
        money: state.money + action.value,
      };
    case GameDataActions.SUBTRACT_MONEY:
      return {
        ...state,
        money: state.money - action.value,
      };
  }
};

export const GameDataContext = createContext<GameDataType | null>(null);
export const GameDataDispatchContext =
  createContext<React.Dispatch<GameDataAction> | null>(null);
