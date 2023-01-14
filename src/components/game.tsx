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
import StatsMenu from "./stats_menu";

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
      {/* Bar foreground img */}
      <img
        className={"w-full h-[22%] absolute bottom-0 z-[0]"}
        style={{ imageRendering: "pixelated" }}
        src={"assets/bar/bar.png"}
        alt={"Bar background image"}
      />

      {/* TOP */}
      <div
        className={
          "w-full flex flex-col flex-1 items-center justify-center border-2 border-blue-500 text-white"
        }
      >
        <pre>{JSON.stringify(gameData, null, 2)}</pre>
        <br />
        <button
          className={"btn-blue"}
          onClick={() => {
            dispatch!({ type: GameDataActions.ADD_MONEY, value: 10000 });
          }}
        >
          Increase Money (10K)
        </button>
      </div>

      {/* BOTTOM */}
      <div
        className={
          "w-full h-2/5 flex justify-evenly border-2 border-red-500 items-center"
        }
      >
        {/* Left menu */}
        <SlideMenu fromLeft>
          {DATA.items.map((item) => (
            <Shop item={item} />
          ))}
        </SlideMenu>

        {/* Right menu */}
        <SlideMenu>
          {/* TODO: make an element here that shows the money outside the menu */}
          {/* <p className={""}>${gameData.money}</p> */}
          <StatsMenu />
        </SlideMenu>

        <div className={"w-2/5 flex items-center justify-evenly m-4"}>
          {currentIngredients.slice(0, mp).map((ingredient) => (
            <IngredientButton ingredient={ingredient} />
          ))}
        </div>

        <div className={"w-1/5 h-full -mt-20 z-[20]"}>
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
