import React, { useState } from "react";
import { Item } from "@utils/types";
import ShopUpgradeButton from "./shop_upgrade_button";
import { DATA } from "../data";

type Props = {
  item: Item;
};

const Shop: React.FC<Props> = ({
                                 item: { name, texture, itemCost, itemDescription },
                               }) => {
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
            {DATA.barUpgrades.ceres.map((upgrade) => (
              <ShopUpgradeButton upgrade={upgrade}/>
            ))}
          </div>
        )}

        {tab == 1 && (
          <div className={"grid grid-cols-4 grid-rows-4"}>
            {DATA.clickableUpgrades.ceres.map((upgrade) => (
              <ShopUpgradeButton upgrade={upgrade}/>
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
            <p>Cost: ${itemCost}</p>
            <p>Description: {itemDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
