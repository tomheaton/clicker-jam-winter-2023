import React, { useState } from "react";
import { Item } from "@utils/types";
import ShopUpgradeButton from "./shop_upgrade_button";
import { useGameData } from "@hooks/game_data";
import { DATA } from "../data";
import { gameDataReducer } from "@hooks/game_data";

type Props = {
  item: Item;
};

const Shop: React.FC<Props> = ({
                                 item: { name, texture, itemCost, itemDescription },
                               }) => {
  const { gameData } = useGameData();
  const [tab, setTab] = useState<number>(0);

  return (
    <div className={"p-10"}>
      <div className={"p-2 flex justify-evenly space-x-4"}>
        <button className={"btn-blue"} onClick={() => setTab(0)}>
          Bar Upgrades
        </button>
        <button className={"btn-blue"} onClick={() => setTab(1)}>
          Clicker Upgrades
        </button>
        <button className={"btn-blue"} onClick={() => setTab(2)}>
          Rocket Upgrades
        </button>
      </div>

      <div>
        {tab == 0 && (
          <div className={"grid grid-cols-4 grid-rows-4"}>
            {Object.values(DATA.barUpgrades).map((value, index) => (
              value.map((upgrade) => (
                <ShopUpgradeButton key={upgrade.name} upgrade={upgrade} locked={index > gameData.level } planetName={DATA.planets[index]} />
              ))
            ))}
          </div>
        )}

        {tab == 1 && (
          <div className={"grid grid-cols-4 grid-rows-4"}>
            {Object.values(DATA.clickableUpgrades).map((value, index) => (
              value.map((upgrade) => (
                <ShopUpgradeButton key={upgrade.name} upgrade={upgrade} locked={ index > gameData.level } planetName={DATA.planets[index]}/>
              ))
            ))}
          </div>
        )}
        {tab == 2 && (
          <div>
            <img
              className={"pixel w-[100px] h-[100px]"}
              src={`assets/drinks/moojito_1.png`}
              alt={`Moojito sprite`}
            />
            <p>Name: {name}</p>
            <p>Cost: ${itemCost.toLocaleString()}</p>
            <p>Description: {itemDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
