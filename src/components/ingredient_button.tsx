import { useContext, useState } from "react";
import { GameDataActions, GameDataDispatchContext } from "../hooks/game_data";
import { Ingredient } from "../utils/types";

const TIME_VALUE: number = 0.25;

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

  const upgradeIngredient = () => {
    // TODO (gonk): add if statement to check if player has enough money
    // after tom implemented the global state thing (react thing nerd thing)
    if (currentUpgrade >= upgradeCount) return;

    if (currentUpgrade < upgradeCount - 1) {
      dispatch!({
        type: GameDataActions.SUBTRACT_MONEY,
        value: upgradeCosts[currentUpgrade],
      });
    }
    setCurrentUpgrade((t) => t + 1);
  };

  const showUpgradeDescriptionPopup = () => {
    // TODO: show popup
  };

  return (
    <div>
      <button
        className={"border-2 border-white group relative"}
        onClick={() => {
          upgradeIngredient();
        }}
      >
        <p
          className={
            "scale-0 text-xl absolute bg-red-500 -right-[200px] -top-[50px] group-hover:scale-100"
          }
        >
          {name}: This is a test description
          <br />
          Level: {currentUpgrade < upgradeCount ? currentUpgrade : "Max"}
        </p>
        <img
          style={{
            imageRendering: "pixelated",
          }}
          className={"w-[200px] h-[200px]"}
          src={`assets/sprites/${texture}`}
          alt={`${name} sprite`}
        />
      </button>
    </div>
  );
};

export default IngredientButton;
