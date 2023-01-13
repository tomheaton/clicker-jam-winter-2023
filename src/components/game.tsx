import { useContext } from "react";
import {
  GameDataActions,
  GameDataContext,
  GameDataDispatchContext,
} from "../hooks/game_data";
import DrinkButton from "./drink_button";
import IngredientButton from "./ingredient_button";
import SlideMenu from "./sliding_menu";

const Game: React.FC = () => {
  const gameData = useContext(GameDataContext);
  const dispatch = useContext(GameDataDispatchContext);

  return (
    <div
      className={
        "bg-black h-screen flex flex-col items-center justify-center w-full"
      }
    >
      <div className={"w-full flex flex-1 border-2 border-blue-500"}>
        <pre>{JSON.stringify(gameData, null, 2)}</pre>
        <br />
        <button
          onClick={() => {
            dispatch!({ type: GameDataActions.ADD_MONEY, value: 11 });
          }}
        >
          increase score
        </button>
      </div>
      <div
        className={"w-full h-2/5 flex justify-evenly border-2 border-red-500 items-center"}
      >
        <SlideMenu />
        {/* Ingredient upgrade buttons */}
        <div className={"grid grid-cols-2 gap-4 m-4"}>
          <IngredientButton
            upgradeCount={5}
            textureName={"mojito.png"}
            upgradeCosts={[1, 5, 10, 15]}
            ingredientName={"Lime"}
            upgradeDescriptions={[]}
          />
        </div>
        <div className={"grid grid-cols-2 gap-4 m-4"}>
          <IngredientButton
            upgradeCount={5}
            textureName={"mojito.png"}
            upgradeCosts={[1, 5, 10, 15]}
            ingredientName={"Alcohol"}
            upgradeDescriptions={[]}
          />
        </div>
        <div className={"grid grid-cols-2 gap-4 m-4"}>
          <IngredientButton
            upgradeCount={5}
            textureName={"mojito.png"}
            upgradeCosts={[1, 5, 10, 15]}
            ingredientName={"Ice"}
            upgradeDescriptions={[]}
          />
        </div>
        <div className={"grid grid-cols-2 gap-4 m-4"}>
          <IngredientButton
            upgradeCount={5}
            textureName={"mojito.png"}
            upgradeCosts={[1, 5, 10, 15]}
            ingredientName={"Mint"}
            upgradeDescriptions={[]}
          />
        </div>

        <div className={"grid grid-cols-2 gap-4 m-4"}>
          <DrinkButton textureName={"mojito.png"} coolDown={5} />
        </div>
      </div>
    </div>
  );
};

export default Game;
