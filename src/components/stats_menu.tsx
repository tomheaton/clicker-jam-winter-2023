import React from "react";
import { DATA } from "@data/index";
import { useGameData } from "@hooks/game_data";
import CurrencyText from "@components/currency";

const StatsMenu: React.FC = () => {
  const { data } = useGameData();

  const currentPlanet = DATA.planets[data.level];

  return (
    <div className={"p-20"}>
      <h1 className={"stats btn-shdw text-center text-xl font-bold"}>Stats</h1>
      <div className={"flex flex-row justify-between"}>
        <div className={"stats btn-shdw mt-4"}>
          <p>Cosmic Dust:</p>
          <p>Location:</p>
          <p>Drink value:</p>
          <p>Drinks p/click:</p>
          <p>Drinks p/s:</p>
        </div>
        <div className={"stats btn-shdw text-right pt-4"}>
          <CurrencyText text={data.money.toLocaleString()}/>
          <p>{currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1)}</p>
          <p>{data.drinkPrice.toLocaleString()}</p>
          <p>{data.drinksPerClick.toLocaleString()}</p>
          <p>{data.drinksPerSecond.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsMenu;
