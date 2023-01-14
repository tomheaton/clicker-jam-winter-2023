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
  const { dispatch } = useGameData();

  const [currentUpgrade, setCurrentUpgrade] = useState<number>(initialLevel);

  const upgradeCount = upgradeCosts.length;

  const handleUpgrade = () => {
    // TODO (gonk): add if statement to check if player has enough money
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
        className={"border-2 border-white group relative"}
        onClick={handleUpgrade}
      >
        {/* Popup description TODO: css it properly */}
        <div
          className={"w-[300px] h-[300px] scale-0 text-xl absolute -right-[30px] -top-[200px] group-hover:scale-100 z-[2]"}
        >
          <img
            className={"pixel w-[300px] h-[300px] absolute -right[200px] -top-[50px] z-[-1]"}
            src={`assets/ui/ingredient_upgrade_description_bubble.png`}
            alt={`Description sprite`}
          />
          <p className={"text-black bg-red-500 z-[4]"}>
            {name} {initialLevel.toString()}
            <br />
            {currentUpgrade < upgradeCosts.length ? `$${upgradeCosts[currentUpgrade]}` : ""}
            <br />
            {currentUpgrade == 0 ?
              (
                "Decreases the clicks required to make a drink by 1!"
              ) : (
                currentUpgrade < upgradeCosts.length ? upgradeDescriptions[currentUpgrade - 1] : "Max"
              )
            }
          </p>
        </div>

        {/* Ingredient sprite */}
        <img
          style={{
            imageRendering: "pixelated",
          }}
          className={"w-[200px] h-[200px]"}
          src={`assets/ingredients/${texture}.png`}
          alt={`${name} sprite`}
        />
      </button>
    </div>
  );
};

export default IngredientButton;
