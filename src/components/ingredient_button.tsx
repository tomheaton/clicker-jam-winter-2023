import React, { useState } from "react";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { Ingredient } from "@utils/types";

const TIME_VALUE: number = 0.25;

// TODO: upgrade description popup

type Props = {
  ingredient: Ingredient;
  initialLevel: number;
};

const IngredientButton: React.FC<Props> = ({
                                             ingredient: { name, texture, upgradeCosts, upgradeDescriptions },
                                             initialLevel,
                                           }) => {
  const { gameData, dispatch } = useGameData();

  const [currentUpgrade, setCurrentUpgrade] = useState<number>(initialLevel);

  const upgradeCount = upgradeCosts.length;

  const handleUpgrade = () => {
    if (gameData.money < upgradeCosts[currentUpgrade]) return;
    if (currentUpgrade >= upgradeCount) return;

    if (currentUpgrade == 0) {
      dispatch({
        type: GameDataActions.INCREASE_DRINKS_PER_CLICK,
        payload: 1,
      });
    }

    dispatch({
      type: GameDataActions.DECREASE_MONEY,
      payload: upgradeCosts[currentUpgrade],
    });

    setCurrentUpgrade((t) => t + 1);

    dispatch({
      type: GameDataActions.UPGRADE_INGREDIENT,
      payload: texture,
    });
  };

  return (
    <div>
      <button
        className={"group relative"}
        onClick={handleUpgrade}
      >
        {/* Popup description */}
        <div
          style={{
            backgroundSize: "100%",
            backgroundImage: "url('./assets/ui/ingredient_upgrade_description_bubble.png')",
          }}
          className={"pixel bg-no-repeat w-[300px] h-[300px] scale-0 absolute -right-[30px] -top-[200px] group-hover:scale-100 z-[2] flex items-center justify-center"}
        >
          <div className={"text-black z-[4] ml-6 -mt-16 w-4/5 text-sm text-center"}>
            <p className={"text-lg font-semibold"}>
              {name}
            </p>
            {currentUpgrade < upgradeCosts.length && (
              <p>
                ${upgradeCosts[currentUpgrade]}
              </p>
              )}
            <p>
              {currentUpgrade == 0 ?
                (
                  "Decreases the clicks required to make a drink by 1!"
                ) : (
                  currentUpgrade < upgradeCosts.length ? upgradeDescriptions[currentUpgrade - 1] : "Max"
                )
              }
            </p>
          </div>
        </div>

        {/* Ingredient sprite */}
        <img
          className={"pixel w-[200px] h-[200px]"}
          src={`assets/ingredients/${texture}.png`}
          alt={`${name} sprite`}
        />
      </button>
    </div>
  );
};

export default IngredientButton;
