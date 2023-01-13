import React, { useState } from "react";
import { Item } from "../utils/types";

type Props = {
  item: Item;
};

const Shop: React.FC<Props> = ({
  item: { name, texture, itemCost, itemDescription },
}) => {
  const [tab, setTab] = useState<"tab1" | "tab2" | "tab3">("tab1");

  return (
    <div className="bg-white w-full">
      <div className={"space-x-2 p-2"}>
        <button className={"btn-blue"} onClick={() => setTab("tab1")}>
          Bar Upgrades
        </button>
        <button className={"btn-blue"} onClick={() => setTab("tab2")}>
          Clicker Upgrades
        </button>
        <button className={"btn-blue"} onClick={() => setTab("tab3")}>
          Rocket Upgrades
        </button>
      </div>

      <div>
        {tab == "tab1" && (
          <div>
            <p>Go to Rocket Section</p>
          </div>
        )}
        <div>
          {tab == "tab2" && (
            <div>
              <p>NO</p>
            </div>
          )}
        </div>
        <div>
          {tab == "tab3" && (
            <>
              <img
                style={{
                  imageRendering: "pixelated",
                }}
                className={"w-[100px] h-[100px]"}
                src={`assets/drinks/moojito_1.png`}
              ></img>
              <p>
                Item Name: {name} Item Cost: {itemCost} Item Description:{" "}
                {itemDescription}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
