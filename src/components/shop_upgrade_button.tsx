import React from "react";
import { Upgrades } from "@utils/types";
import { useGameData } from "@hooks/game_data";
import { DATA } from "../data";

type Props = {
  upgrade: Upgrades;
  locked: boolean;
  planetName: string;
};

const ShopUpgradeButton: React.FC<Props> = ({
  upgrade: { name, texture, description, costs, flatIncrease, increases },
  locked,
  planetName,
}) => {
  const { gameData } = useGameData();

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
        src={`assets/upgrades/${ locked ? "locked_upgrade" : "test_upgrade_sprite" }.png`}
        alt={`${name} upgrade sprite`}
      />

      <div className={"scale-0 bg-red-500 absolute z-[2] group-hover:scale-100"}>
        <p>
          { locked ? "Upgrade locked": name }
          <br/>
          { locked ? `Get to planet ${ planetName.charAt(0).toUpperCase() + planetName.slice(1) }` : description }
        </p>
      </div>
    </button>
  );
};

export default ShopUpgradeButton;
