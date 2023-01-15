import React, { useState } from "react";
import { Upgrades } from "@utils/types";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { DATA } from "../data";

type Props = {
  upgrade: Upgrades;
  locked: boolean;
  planetName: string;
  initialLevel: number;
};

const ShopUpgradeButton: React.FC<Props> = ({
                                              upgrade: {
                                                name,
                                                texture,
                                                description,
                                                costs,
                                                flatIncrease,
                                                increases,
                                                upgradeType,
                                              },
                                              locked,
                                              planetName,
                                              initialLevel,
                                            }) => {
  const { gameData, dispatch } = useGameData();
  const [stage, setStage] = useState<number>(initialLevel);

  const dispatchTypes = {
    "clickableUpgrades": GameDataActions.INCREASE_DRINKS_PER_CLICK,
    "barUpgrades": GameDataActions.INCREASE_DRINKS_PER_SECOND,
    // TODO: @gonk add rocket upgrades
    "rocketUpgrades": GameDataActions.INCREASE_DRINKS_PER_CLICK,
  };

  let disabled = locked || gameData.money < costs[stage] || stage >= costs.length;

  if (upgradeType === "clickableUpgrades") {
    const currentIngredients = DATA.drinks[gameData.level].ingredients;
    let numberOfIngredientsUpgradedOnce = 0;
    currentIngredients.forEach((ingredient) => {
      if (gameData.ingredients[ingredient.texture] > 0) {
        numberOfIngredientsUpgradedOnce += 1;
      }
    });

    if (numberOfIngredientsUpgradedOnce < currentIngredients.length) {
      disabled = true;
    }
  }

  const handleBuy = () => {
    if (disabled) return;

    dispatch({
      type: GameDataActions.DECREASE_MONEY,
      payload: costs[stage],
    });

    dispatch({
      type: dispatchTypes[upgradeType],
      payload: (flatIncrease || stage === 0) ? increases[stage] : (1 + increases[stage]) * gameData.drinksPerSecond,
    });

    dispatch({
      type: GameDataActions.INCREASE_UPGRADE,
      payload: {
        group: "barUpgrades",
        name: texture,
      },
    });

    setStage(s => s + 1);
  };

  // TODO: @gonk pass in sprite texture once we have upgrade textures
  return (
    <button
      className={"w-[64px] h-[64px] group m-4 opacity-100 disabled:cursor-auto"}
      onClick={handleBuy}
      disabled={disabled}
    >
      <img
        className={"pixel w-full h-full disabled:opacity-20"}
        src={`assets/upgrades/${locked ? "locked_upgrade" : "test_upgrade"}.png`}
        alt={`${name} upgrade sprite`}
      />

      <div className={"scale-0 bg-red-500 absolute z-[2] group-hover:scale-100 opacity-100 disabled:opacity-100"}>
        <p>
          {locked ? "Upgrade locked" : name}
        </p>
        <p>
          {locked ? `Get to location ${planetName.charAt(0).toUpperCase() + planetName.slice(1)}` : description}
        </p>
        {stage < costs.length && !locked && (
          <p>
            +{`${(flatIncrease || stage === 0) ? increases[stage] : increases[stage] * 100}` + `${(flatIncrease || stage === 0) ? "" : "%"}`} drinks/s
            <br />
            Cost: ${costs[stage]}
            <br />
          </p>
        )}
        <p>
          Level: {stage < costs.length ? stage : "Max"}
        </p>
      </div>
    </button>
  );
};

export default ShopUpgradeButton;
