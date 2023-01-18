import React, { useState } from "react";
import { Upgrades } from "@utils/types";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { DATA } from "../data";
import { CurrencyText } from "@components/currency";
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

  if (upgradeType === GameDataActions.UPGRADE_CLICKABLE) {
    const currentIngredients = DATA.drinks[data.level].ingredients;
    if (getIngredientsUpgradedOnce(currentIngredients, data.clickableUpgrades) < currentIngredients.length) {
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

    /*dispatch({
      type: upgradeType,
      payload: (flatIncrease || stage === 0) ? increases[stage] : (1 + increases[stage]) * data.drinksPerSecond,
    });*/

    /*dispatch({
      type: GameDataActions.INCREASE_UPGRADE,
      payload: {
        group: "barUpgrades",
        name: texture,
      },
    });*/

    setStage(s => s + 1);
  };

  // TODO: @gonk pass in sprite texture once we have upgrade textures
  return (
    <button
      className={"w-[64px] h-[64px] group m-3 opacity-100 disabled:cursor-auto"}
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
