import React, { useState } from "react";
import { Upgrades } from "@utils/types";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { DATA } from "@data/index";
import CurrencyText from "@components/currency";
import { getIngredientsUpgradedOnce } from "@utils/index";

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
  const { data, dispatch } = useGameData();
  const [stage, setStage] = useState<number>(initialLevel);

  let disabled = locked || data.money < costs[stage] || stage >= costs.length;

  if (upgradeType === GameDataActions.UPGRADE_DRINK) {
    const currentIngredients = DATA.drinks[data.level].ingredients;
    let numberOfIngredientsUpgradedOnce = getIngredientsUpgradedOnce(currentIngredients, data.ingredients);
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
      type: upgradeType,
      payload: texture,
    });

    // NOTES:
    // Clickable Upgrades = INCREASE_DRINKS_PER_CLICK
    // Bar Upgrades = INCREASE_DRINKS_PER_SECOND

    dispatch({
      type: upgradeType === GameDataActions.UPGRADE_DRINK
        ? GameDataActions.INCREASE_DRINKS_PER_CLICK
        : GameDataActions.INCREASE_DRINKS_PER_SECOND,
      payload: (flatIncrease || stage === 0) ? increases[stage] : (1 + increases[stage]) * data.drinksPerSecond,
    });

    /*dispatch({
      type: GameDataActions.INCREASE_UPGRADE,
      payload: {
        group: "barUpgrades",
        name: texture,
      },
    });*/

    setStage(s => s + 1);
  };

  return (
    <button
      className={"w-[64px] h-[64px] group m-3 opacity-100 disabled:cursor-auto hover:scale-110 hover:ease-in-out"}
      onClick={handleBuy}
      disabled={disabled}
    >
      <img
        className={"pixel w-full h-full disabled:opacity-20"}
        src={`assets/upgrades/${locked ? "locked_upgrade" : texture}.png`}
        alt={`${name} upgrade sprite`}
      />

      <div
        className={"scale-0 bg-red-500 absolute z-[2] group-hover:scale-100 opacity-100 disabled:opacity-100 p-4 rounded-xl"}>
        <p>
          {locked ? "Upgrade locked" : name}
        </p>
        <p>
          {locked ? `Get to location '${planetName.charAt(0).toUpperCase() + planetName.slice(1)}'` : description}
        </p>
        {stage < costs.length && !locked && (
          <div className={"flex flex-col items-center"}>
            <p>
              +{`${(flatIncrease || stage === 0) ? increases[stage] : increases[stage] * 100}` + `${(flatIncrease || stage === 0) ? "" : "%"}`} drinks/s
            </p>
            <CurrencyText preText={"Cost:"} text={costs[stage].toLocaleString()} />
          </div>
        )}
        <p>
          Level: {stage < costs.length ? stage : "Max"}
        </p>
      </div>
    </button>
  );
};

export default ShopUpgradeButton;
