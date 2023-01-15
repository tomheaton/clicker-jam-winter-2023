import React from "react";
import { DATA } from "../data";
import { useGameData } from "@hooks/game_data";

const StatsMenu: React.FC = () => {
  const { gameData } = useGameData();

  const currentPlanet = DATA.planets[gameData.level];

  return (
    <div className={"p-10"}>
      <h1 className={"text-center text-xl font-bold"}>Stats</h1>
      <div className={"mt-4"}>
        <p>Money: ${gameData.money.toLocaleString()}</p>
        <p>Drink selling price: {gameData.drinkPrice}</p>
        <p>Drinks per click: {gameData.drinksPerClick}</p>
        <p>Drinks per second: {gameData.drinksPerSecond}</p>
        <p>Location: {currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1)}</p>
      </div>
    </div>
  );
};

export default StatsMenu;
