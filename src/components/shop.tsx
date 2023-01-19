import React, { useState } from "react";
import ShopUpgradeButton from "./shop_upgrade_button";
import { useGameData } from "@hooks/game_data";
import { DATA } from "../data";
import RocketShop from "@components/rocket_shop";

const Shop: React.FC = () => {
  const { data } = useGameData();
  const [tab, setTab] = useState<number>(0);

  return (
    <div className={"p-10"}>
      <div className={"p-2 flex justify-evenly space-x-4 text-sm"}>
        <button className={"btn-indigo"} onClick={() => setTab(0)}>
          Bar
        </button>
        <button className={"btn-indigo"} onClick={() => setTab(1)}>
          Clicker
        </button>
        <button className={"btn-indigo"} onClick={() => setTab(2)}>
          Rocket
        </button>
      </div>

      <div>
        {tab === 0 && (
          <div className={"grid grid-cols-4 col"}>
            {Object.values(DATA.barUpgrades).map((value, index) => (
              value.map((upgrade) => (
                <ShopUpgradeButton
                  key={upgrade.name}
                  upgrade={upgrade}
                  locked={index > data.level}
                  planetName={DATA.planets[index]}
                  initialLevel={data.barUpgrades[upgrade.texture]}
                />
              ))
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className={"grid grid-cols-4"}>
            {Object.values(DATA.clickableUpgrades).map((value, index) => (
              value.map((upgrade) => (
                <ShopUpgradeButton
                  key={upgrade.name}
                  upgrade={upgrade}
                  locked={index > data.level}
                  planetName={DATA.planets[index]}
                  initialLevel={data.clickableUpgrades[upgrade.texture]}
                />
              ))
            ))}
          </div>
        )}

        {tab === 2 && (
          <RocketShop />
        )}

        {/* tab === 2 && (
          <div>
            {DATA.items.map((item, index) => (
              <div key={item.texture} className={"flex w-full"}>
                <button
                  className={"flex my-2 space-x-8 w-full"}
                  onClick={() => {
                    //dispatch({
                    //  type: GameDataActions.INCREASE_UPGRADE,
                    //  payload: {
                    //    group: "rocketUpgrades",
                    //    name: item.texture,
                    //  },
                    //});
                    dispatch({
                      type: GameDataActions.UPGRADE_ROCKET,
                      payload: item.texture,
                    });
                  }}
                  disabled={data.rocketUpgrades[item.texture] >= item.costs.length}
                >
                  <img
                    className={"pixel w-[64px] h-[64px]"}
                    src={`assets/ui/${item.texture}_sprite.png`}
                    alt={`${item.name} sprite`}
                  />
                  <div className={"text-left"}>
                    <p>Name: {item.name}</p>
                    <p>Cost: ${item.itemCost.toLocaleString()}</p>
                    <p>Description: {item.itemDescription}</p>
                    <p>Level: {data.rocketUpgrades[item.texture]}</p>
                  </div>
                </button>
                <button
                  className={"btn-red m-4"}
                  onClick={() => {
                    dispatch({ type: GameDataActions.SET_LEVEL, payload: index });
                    dispatch({ type: GameDataActions.RESET_ROCKET, payload: item.texture });
                  }}
                  disabled={data.rocketUpgrades[item.texture] < item.costs.length}
                >
                  Travel
                </button>
              </div>
            ))}
          </div>
        ) */}
      </div>
    </div>
  );
};

export default Shop;
