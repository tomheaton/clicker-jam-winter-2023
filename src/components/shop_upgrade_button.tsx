import React from "react";
import { Upgrades } from "@utils/types";

type Props = {
  upgrade: Upgrades;
};

const ShopUpgradeButton: React.FC<Props> = ({
                                             upgrade: { name, texture, description, costs, flatIncrease, increases },
                                           }) => {

  const handleBuy = () => {

  }

  // TODO: @gonk pass in sprite texture once we have upgrade textures
  return (
    <button
      className={"w-[64px] h-[64px] group m-4"}
      onClick={handleBuy}
    >
      <img
        className={"pixel w-full h-full"}
        src={`assets/upgrades/test_upgrade_sprite.png`}
        alt={`${name} upgrade sprite`}
      />

      <div className={"scale-0 bg-red-500 absolute z-[2] group-hover:scale-100"}>
        <p>
          { name }
          <br/>
          { description }
        </p>
      </div>
    </button>
  );
};

export default ShopUpgradeButton;
