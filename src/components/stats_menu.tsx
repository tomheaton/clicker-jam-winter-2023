import React, { useContext } from "react";
import { GameDataContext } from "@hooks/game_data";

const StatsMenu: React.FC = () => {
  const { data: gameData } = useContext(GameDataContext);

  return (
    <div className={"p-10"}>
      <h1 className={"text-center text-xl font-bold"}>Stats</h1>
      <div className={"mt-4"}>
        <p>Money: ${gameData?.money ?? "none"}</p>
        <p>Drink selling price: {gameData?.drinkPrice ?? "none"}</p>
        <p>Drinks per click: {gameData?.drinksPerClick ?? "none"}</p>
        <p>Drinks per second: {gameData?.drinksPerSecond ?? "none"}</p>
      </div>
    </div>
  );
};

export default StatsMenu;
