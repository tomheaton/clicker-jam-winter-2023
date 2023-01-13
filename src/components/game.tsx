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
  let currentIngredients = currentDrink.ingredients;

  let mp = parseInt((currentIngredients.length / 2).toFixed(0));

  return (
    <div
      style={{
        imageRendering: "pixelated",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('./assets/planet_backgrounds/ceres.png')",
      }}
      className={"h-screen flex flex-col items-center justify-center w-full"}
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
        <SlideMenu fromLeft>
          <p>left</p>
          {DATA.items.map((item) => (
            <Shop item={item} />
          ))}
        </SlideMenu>

        <SlideMenu>
          <p>lol</p>
        </SlideMenu>

        <div className={"w-2/5 flex items-center justify-evenly m-4"}>
          {currentIngredients.slice(0, mp).map((ingredient) => (
            <IngredientButton ingredient={ingredient} />
          ))}
        </div>

        <div className={"w-1/5 h-full -mt-20"}>
          <DrinkButton drink={currentDrink} />
        </div>

        <div className={"w-2/5 flex items-center justify-evenly m-4"}>
          {currentIngredients.slice(mp).map((ingredient) => (
            <IngredientButton ingredient={ingredient} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
