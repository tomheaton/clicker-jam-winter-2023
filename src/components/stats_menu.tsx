import React from "react";
import { DATA } from "@data/index";
import { useGameData } from "@hooks/game_data";
import CurrencyText from "@components/currency";

const StatsMenu: React.FC = () => {
  const { data } = useGameData();

  const currentPlanet = DATA.planets[data.level];

  return (
    <div className={"p-10"}>
      <h1 className={"text-center text-xl font-bold"}>Stats</h1>
      <div className={"mt-4"}>
        <CurrencyText preText={"Money:"} text={data.money.toLocaleString()} />
        <p>Drink selling price: {data.drinkPrice.toLocaleString()}</p>
        <p>Drinks per click: {data.drinksPerClick.toLocaleString()}</p>
        <p>Drinks per second: {data.drinksPerSecond.toLocaleString()}</p>
        <p>Location: {currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1)}</p>
      </div>
    </div>
  );
};

export default StatsMenu;
