import React from "react";
import { DATA } from "@data/index";
import { useGameData } from "@hooks/game_data";
import CurrencyText from "@components/currency";
import { getIngredientsUpgradedOnce } from "@utils/index";

const StatsMenu: React.FC = () => {
  const { data } = useGameData();

  const currentPlanet = DATA.planets[data.level];

  let numberOfIngredientsUpgradedOnce =
    getIngredientsUpgradedOnce(DATA.drinks[data.level].ingredients, data.ingredients);

  return (
    <div className={"p-20"}>
      <h1 className={"stats btn-shdw text-center text-xl font-bold"}>Stats</h1>
      <div className={"flex flex-row justify-between"}>
        <div className={"stats btn-shdw mt-4"}>
          <p>Cosmic Dust:</p>
          <p>Location:</p>
          <br/>
          <p>Cosmic Dust/s:</p>
          <p>Cosmic Dust/click:</p>
          <br/>
          <p>Drink value:</p>
          <p>{DATA.drinks[data.level].name} base value</p>
          <p>Drinks/click:</p>
          <p>Drinks/s:</p>
        </div>
        <div className={"stats btn-shdw text-right pt-4"}>
          <CurrencyText text={data.money.toLocaleString()}/>
          <p>{currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1)}</p>
          <br/>
          <p>{((DATA.drinks[data.unlockedLevel].baseSellPrice + data.drinkPrice) * data.drinksPerSecond).toLocaleString()}</p>
          <p>{(DATA.drinks[data.level].baseSellPrice + data.drinkPrice) * (data.drinksPerClick - numberOfIngredientsUpgradedOnce )}</p>
          <br/>
          <p>{(data.drinkPrice + DATA.drinks[data.level].baseSellPrice).toLocaleString()}</p>
          <p>{DATA.drinks[data.level].baseSellPrice.toLocaleString()}</p>
          <p>{(data.drinksPerClick - numberOfIngredientsUpgradedOnce).toLocaleString()}</p>
          <p>{data.drinksPerSecond.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsMenu;
