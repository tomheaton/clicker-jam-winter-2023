import React from "react";
import { DATA } from "../data";
import { GameDataActions, useGameData } from "@hooks/game_data";
import DrinkButton from "./drink_button";
import IngredientButton from "./ingredient_button";
import Shop from "./shop";
import SlideMenu from "./slide_menu";
import StatsMenu from "./stats_menu";

const Game: React.FC = () => {
  const { gameData, dispatch } = useGameData();

  const currentDrink = DATA.drinks[gameData.level];
  const currentIngredients = currentDrink.ingredients;
  const mp = parseInt((currentIngredients.length / 2).toFixed(0));

  return (
    <div
      style={{
        backgroundSize: "100%",
        backgroundImage: `url('./assets/planets/${DATA.planets[gameData.level]}.png')`,
      }}
      className={"pixel bg-no-repeat h-screen flex flex-col items-center justify-center w-full"}
    >
      {/* Bar foreground image */}
      <img
        className={"pixel w-full h-[22%] absolute bottom-0 z-[0]"}
        src={"assets/bar/bar.png"}
        alt={"Bar background image"}
      />

      {/* TOP */}
      <div
        className={
          "w-full flex flex-col flex-1 items-center justify-center"
        }
      >
        {/*<pre>{JSON.stringify(gameData, null, 2)}</pre>*/}
        {/*<pre>{JSON.stringify(gameData.ingredients, null, 2)}</pre>*/}
        {DATA.planets[gameData.level]}
        <br />
        <button
          className={"btn-blue"}
          onClick={() => {
            dispatch({ type: GameDataActions.INCREASE_MONEY, payload: 10000 });
          }}
        >
          Increase Money (10K)
        </button>
        <br />
        <div className={"space-x-4"}>
          {Array.from(Array(DATA.drinks.length).keys()).map((x) => {
            return (
              <button
                key={x}
                className={"btn-red"}
                onClick={() => {
                  dispatch({ type: GameDataActions.SET_LEVEL, payload: x });
                }}
              >
                {x}
              </button>
            );
          })}
        </div>

        { /* Money counter */}
        <p className={"bg-black text-white fixed top-0 right-40 text-5xl"}>${gameData.money}</p>

        {/* Left menu */}
        <SlideMenu fromLeft>
          {DATA.items.map((item) => (
            <Shop key={item.name} item={item} />
          ))}
        </SlideMenu>

        {/* Right menu */}
        <SlideMenu>
          <StatsMenu />
        </SlideMenu>
      </div>

      {/* BOTTOM */}
      <div
        className={
          "w-full h-2/5 flex justify-evenly items-center"
        }
      >
        <div className={"w-2/5 flex items-center justify-evenly m-4"}>
          {currentIngredients.slice(0, mp).map((ingredient) => (
            <IngredientButton
              key={ingredient.name}
              ingredient={ingredient}
              initialLevel={gameData.ingredients[ingredient.texture]}
            />
          ))}
        </div>

        <div className={"w-1/5 h-full -mt-20 z-[20]"}>
          <DrinkButton drink={currentDrink} />
        </div>

        <div className={"w-2/5 flex items-center justify-evenly m-4"}>
          {currentIngredients.slice(mp).map((ingredient) => (
            <IngredientButton
              key={ingredient.name}
              ingredient={ingredient}
              initialLevel={gameData.ingredients[ingredient.texture]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
