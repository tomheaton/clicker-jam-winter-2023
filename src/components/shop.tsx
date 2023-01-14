import React, { useState } from "react";
import { Item } from "../utils/types";

type Props = {
  item: Item;
};

const Shop: React.FC<Props> = ({
  item: { name, texture, itemCost, itemDescription },
}) => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className={"p-10"}>
      <div className={"p-2 flex justify-evenly"}>
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
          <div>
            <p>Go to Rocket Section</p>
          </div>
        )}

        {tab == 1 && (
          <div>
            <p>NO</p>
          </div>
        )}

        {tab == 2 && (
          <div>
            <img
              style={{
                imageRendering: "pixelated",
              }}
              className={"w-[100px] h-[100px]"}
              src={`assets/drinks/moojito_1.png`}
              alt={`Moojito sprite`}
            />
            <p>
              Name: {name}
              <br />
              Cost: ${itemCost}
              <br />
              Description: {itemDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
