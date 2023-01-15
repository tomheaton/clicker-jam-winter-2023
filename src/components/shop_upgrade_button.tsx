import React, { useState } from "react";
import { Upgrades } from "@utils/types";
import { GameDataActions, useGameData } from "@hooks/game_data";
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
  const { gameData, dispatch } = useGameData();
  const [stage, setStage] = useState<number>(0);

  const handleBuy = () => {
    if (locked || gameData.money < costs[stage] || stage >= costs.length) return;

    dispatch({
      type: GameDataActions.INCREASE_DRINKS_PER_SECOND,
      payload: (flatIncrease || stage) == 0 ? increases[stage] : (1 + increases[stage]) * gameData.drinksPerSecond,
    });
    
    console.log(gameData.drinksPerSecond);
    
    dispatch({
      type: GameDataActions.INCREASE_UPGRADE,
      payload: {
        group: "barUpgrades",
        name: texture,
      },
    });

    setStage((s) => s+1);
  }

  // TODO: @gonk pass in sprite texture once we have upgrade textures
  return (
    <button
      disabled={ locked || gameData.money < costs[stage] || stage >= costs.length }
      className={"w-[64px] h-[64px] group m-4 opacity-100 disabled:cursor-auto"}
      onClick={handleBuy}
    >
      <img
        className={"pixel w-full h-full disabled:opacity-20"}
        src={`assets/upgrades/${ locked ? "locked_upgrade" : "test_upgrade_sprite" }.png`}
        alt={`${name} upgrade sprite`}
      />

      <div className={"scale-0 bg-red-500 absolute z-[2] group-hover:scale-100 opacity-100 disabled:opacity-100"}>
        <p>
          { locked ? "Upgrade locked": name }
          <br/>
          { locked ? `Get to planet ${ planetName.charAt(0).toUpperCase() + planetName.slice(1) }` : description }
          <br />
          { stage < costs.length && (
            <div>
              +{ `${(flatIncrease || stage == 0) ? increases[stage] : increases[stage]*100 }` + `${(flatIncrease || stage == 0) ? "" : "%" }` } drinks/s
              <br />
              Cost: ${costs[stage]}
              <br />
            </div>
          )}
          Level: {stage < costs.length ? stage : "Max" }
        </p>
      </div>
    </button>
  );
};

export default ShopUpgradeButton;
