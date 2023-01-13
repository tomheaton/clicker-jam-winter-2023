import { PropsWithChildren, useContext, useState } from "react";
import { GameDataActions, GameDataDispatchContext } from "../hooks/game_data";
import { Ingredient } from "../utils/types";

const TIME_VALUE: number = 0.25;

type LOL = PropsWithChildren;

// TODO: upgrade description popup

type Props = {
  ingredient: Ingredient;
};

const IngredientButton: React.FC<Props> = ({
  ingredient: { name, texture, upgradeCosts, upgradeDescriptions },
}) => {
  const [currentUpgrade, setCurrentUpgrade] = useState<number>(0);

  const dispatch = useContext(GameDataDispatchContext);

  const upgradeCount = upgradeCosts.length;

  const handleUpgrade = () => {
    // TODO (gonk): add if statement to check if player has enough money
    // after tom implemented the global state thing (react thing nerd thing)
    if (currentUpgrade >= upgradeCount - 1) return;

    dispatch!({
      type: GameDataActions.SUBTRACT_MONEY,
      value: upgradeCosts[currentUpgrade],
    });
    setCurrentUpgrade((t) => t + 1);
  };

  return (
    <div>
      <button
        className={"border-2 border-white group relative"}
        onClick={handleUpgrade}
      >

        { /* Popup description TODO: css it properly */ }
        <div
          className={
            "w-[300px] h-[300px] scale-0 text-xl absolute -right-[30px] -top-[200px] group-hover:scale-100 z-[2]"
          }
        >
          <img
            style={{
              imageRendering: "pixelated",
            }}
            className={"w-[300px] h-[300px] absolute -right[200px] -top-[50px] z-[-1]"}
            src={`assets/UI/ingredient_upgrade_description_bubble.png`}
            alt={`Description sprite`}
          />
          <p className={"text-black bg-red-500 z-[4]"}>
            {name}: This is a test description
            <br />
            Level: {currentUpgrade < upgradeCount ? currentUpgrade : "Max"}
          </p>
        </div>

        { /* Ingredient sprite */ }
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
