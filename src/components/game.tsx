import { useContext } from "react";
import { DATA } from "../data";
import {
  GameDataActions,
  GameDataContext,
  GameDataDispatchContext,
} from "../hooks/game_data";
import DrinkButton from "./drink_button";
import IngredientButton from "./ingredient_button";
import Shop from "./shop";
import SlideMenu from "./slide_menu";

const Game: React.FC = () => {
  const gameData = useContext(GameDataContext);
  const dispatch = useContext(GameDataDispatchContext);

  let currentDrink = DATA.drinks[0];

  let mp = parseInt((DATA.ingredients.slice(0, 4).length / 2).toFixed(0));

  return (
    <div
      style={{ /*backgroundImage: "url('./assets/planet_backgrounds/ceres.png')"*/ }}
      className={
        "bg-red-500 h-screen flex flex-col items-center justify-center w-full"
      }
    >
      <img
        style={{
          imageRendering: "pixelated",
        }}
        className={"w-full h-full z-[-10] fixed"}
        src={`assets/planet_backgrounds/ceres.png`}
        alt={`Background Image`}
      />
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
        <SlideMenu fromLeft={false}>
          <p>lol</p>
        </SlideMenu>
        <SlideMenu fromLeft={true}>
          <p>left</p>
          {DATA.items
          .map((item) => (<Shop item={item}></Shop>))
          } 
        </SlideMenu>

        <div className={"grid grid-cols-2 gap-4 m-4"}>
          {DATA.ingredients
            .slice(0, 4)
            .slice(0, mp)
            .map((ingredient) => (
              <IngredientButton ingredient={ingredient} />
            ))}
        </div>

        <div className={"h-full -mt-20"}>
          <DrinkButton drink={currentDrink} />
        </div>

        <div className={"grid grid-cols-2 gap-4 m-4"}>
          {DATA.ingredients
            .slice(0, 4)
            .slice(mp)
            .map((ingredient) => (
              <IngredientButton ingredient={ingredient} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
