import { useEffect, useState } from "react";

const TIME_VALUE: number = 0.25;

// TODO: upgrade description popup

const IngredientButton: React.FC<{
  upgradeCount: number; 
  textureName: string;
  upgradeCosts: number[];
  ingredientName: string; // Use for the upgrade description popup
  upgradeDescriptions: string[];
}> = ({ upgradeCount, textureName, upgradeCosts, ingredientName, upgradeDescriptions }) => {

  const [currentUpgrade, setCurrentUpgrade] = useState<number>(0);

  const upgradeIngredient = () => {
    // TODO (gonk): add if statement to check if player has enough money
    // after tom implemented the global state thing (react thing nerd thing)
    if (currentUpgrade >= upgradeCount) return;

    setCurrentUpgrade(t => t+1);
  };

  const showUpgradeDescriptionPopup = () => {
      // TODO: show popup
  }

  return (
    <div>
      <button
        className={"border-2 border-white group relative"}
        onClick={() => upgradeIngredient()}
      >
        <p
          className={"scale-0 text-xl absolute bg-red-500 -right-[200px] -top-[50px] group-hover:scale-100"}
        >
          {ingredientName}: This is a test description
          <br/>
          Level: {currentUpgrade < upgradeCount ? currentUpgrade : "Max"}
        </p>
        <img
          style={{
            imageRendering: "pixelated",
          }}
          className={"w-[200px] h-[200px]"}
          src={`assets/sprites/${textureName}`}
          alt={`${textureName} sprite`}
        />
      </button>
    </div>
  );
};

export default IngredientButton;
