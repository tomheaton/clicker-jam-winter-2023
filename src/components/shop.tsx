import React, { useState } from "react";
import ShopUpgradeButton from "./shop_upgrade_button";
import { useGameData } from "@hooks/game_data";
import { DATA } from "../data";

const Shop: React.FC = () => {
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
          Rocket Tickets
        </button>
      </div>

      <div>
        {tab == 0 && (
          <div className={"grid grid-cols-4 col"}>
            {Object.values(DATA.barUpgrades).map((value, index) => (
              value.map((upgrade) => (
                <ShopUpgradeButton
                  key={upgrade.name}
                  upgrade={upgrade}
                  locked={index > gameData.level}
                  planetName={DATA.planets[index]}
                />
              ))
            ))}
          </div>
        )}

        {tab == 1 && (
          <div className={"grid grid-cols-4"}>
            {Object.values(DATA.clickableUpgrades).map((value, index) => (
              value.map((upgrade) => (
                <ShopUpgradeButton
                  key={upgrade.name}
                  upgrade={upgrade}
                  locked={index > gameData.level}
                  planetName={DATA.planets[index]}
                />
              ))
            ))}
          </div>
        )}

        {tab == 2 && (
          <div>
            {DATA.items.map((item) => (
              <div className={"flex my-2 space-x-8"}>
                <img
                  className={"pixel w-20 h-20x"}
                  src={`assets/items/${item.texture}_1.png`}
                  alt={`${item.name} sprite`}
                />
                <div>
                  <p>Name: {item.name}</p>
                  <p>Cost: ${item.itemCost.toLocaleString()}</p>
                  <p>Description: {item.itemDescription}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
