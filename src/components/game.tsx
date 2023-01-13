import { useContext } from "react";
import { DATA } from "../data";
import {
  GameDataActions,
  GameDataContext,
  GameDataDispatchContext
} from "../hooks/game_data";
import DrinkButton from "./drink_button";
import IngredientButton from "./ingredient_button";

const Game: React.FC = () => {
  const gameData = useContext(GameDataContext);
  const dispatch = useContext(GameDataDispatchContext);

  let mp = parseInt((DATA.ingredients.length / 2).toFixed(0));

  return (
    <div
      className={
        "bg-black h-screen flex flex-col items-center justify-center w-full"
      }
    >
      {/* TOP */}
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

      {/* BOTTOM */}
      <div
        className={
          "w-full h-2/5 flex justify-evenly border-2 border-red-500 items-center"
        }
      >
        {/* <SlideMenu /> */}

        <div className={"grid grid-cols-2 gap-4 m-4"}>
          {DATA.ingredients.slice(0, mp).map((ingredient) => (
            <IngredientButton ingredient={ingredient} />
          ))}
        </div>

        <div className={"h-full -mt-20"}>
          <DrinkButton drink={DATA.drink} />
        </div>

        <div className={"grid grid-cols-2 gap-4 m-4"}>
          {DATA.ingredients.slice(mp).map((ingredient) => (
            <IngredientButton ingredient={ingredient} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
