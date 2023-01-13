import { createContext } from "react";

const defaultLogic = {
  score: 0,
  money: 0,
};

const LogicContext = createContext(defaultLogic);

export { LogicContext };
