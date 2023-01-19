import React, { useState } from "react";
import ShopUpgradeButton from "@components/shop_upgrade_button";
import { useGameData } from "@hooks/game_data";
import { DATA } from "@data/index";
import RocketShop from "@components/rocket_shop";

const Shop: React.FC = () => {
  const { data } = useGameData();
  const [tab, setTab] = useState<number>(0);

  return (
    <div className={"p-10"}>
      <div className={"p-2 flex justify-evenly space-x-4"}>
        <button
          style={{
            backgroundImage: "url('./assets/ui/tab.png')",
          }}
          className={`btn-brown shdw text-sm bg-no-repeat bg-cover w-[120px] h-[60px] ${tab === 0 ? "text-[#432208] bg-neutral-800 opacity-100" : "text-[#593417] bg-black opacity-80"}`}
          onClick={() => setTab(0)}
        >
          Bar
        </button>
        <button
          style={{
            backgroundImage: "url('./assets/ui/tab.png')",
          }}
          className={`btn-brown shdw text-sm bg-no-repeat bg-cover w-[120px] h-[60px] ${tab === 1 ? "text-[#432208] bg-neutral-800 opacity-100" : "text-[#593417] bg-black opacity-80"}`}
          onClick={() => setTab(1)}
        >
          Drinks
        </button>
        <button
          style={{
            backgroundImage: "url('./assets/ui/tab.png')",
          }}
          className={`btn-brown shdw text-sm bg-no-repeat bg-cover w-[120px] h-[60px] ${tab === 2 ? "text-[#432208] bg-neutral-800 opacity-100" : "text-[#593417] bg-black opacity-80"}`}
          onClick={() => setTab(2)}
        >
          Rocket
        </button>
      </div>

      <div>
        {tab === 0 && (
          <div className={"grid grid-cols-4"}>
            {Object.values(DATA.barUpgrades).map((value, index) => (
              value.map((upgrade) => (
                <ShopUpgradeButton
                  key={upgrade.name}
                  upgrade={upgrade}
                  locked={index > data.unlockedLevel}
                  planetName={DATA.planets[index]}
                  initialLevel={data.barUpgrades[upgrade.texture]}
                />
              ))
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className={"grid grid-cols-4"}>
            {Object.values(DATA.drinkUpgrades).map((value, index) => (
              value.map((upgrade) => (
                <ShopUpgradeButton
                  key={upgrade.name}
                  upgrade={upgrade}
                  locked={index > data.unlockedLevel}
                  planetName={DATA.planets[index]}
                  initialLevel={data.drinkUpgrades[upgrade.texture]}
                />
              ))
            ))}
          </div>
        )}

        {tab === 2 && (
          <RocketShop />
        )}
      </div>
    </div>
  );
};

export default Shop;
