import React, { useEffect } from "react";
import { DATA } from "../data";
import { GameDataActions, useGameData } from "@hooks/game_data";
import DrinkButton from "./drink_button";
import IngredientButton from "./ingredient_button";
import Shop from "./shop";
import SlideMenu from "./slide_menu";
import StatsMenu from "./stats_menu";

const DRINK_SELL_VALUE: number = 5;

const Game: React.FC = () => {
  const { gameData, dispatch } = useGameData();

  const currentDrink = DATA.drinks[gameData.level];
  const currentIngredients = currentDrink.ingredients;
  const mp = parseInt((currentIngredients.length / 2).toFixed(0));

  useEffect(() => {
    const timerTick = setInterval(() => {
      dispatch({
        type: GameDataActions.INCREASE_MONEY,
        // TODO: change this to current drink sell value from DATA
        payload: DRINK_SELL_VALUE * gameData.drinksPerSecond * gameData.drinkPrice,
      });
    }, 1000);

    return () => {
      clearInterval(timerTick);
    };
  });

  return (
    // Carpet
    <div
      style={{
        backgroundSize: "100%",
        backgroundImage: `url('./assets/ui/carpet_${DATA.planets[gameData.level]}.png')`,
      }}
      className={"pixel bg-repeat-y h-screen flex flex-col items-center justify-center w-full"}
    >
      {/* Left Menu */}
      <SlideMenu fromLeft>
        <Shop />
      </SlideMenu>

      {/* Right Menu */}
      <SlideMenu>
        <StatsMenu />
      </SlideMenu>

      {/*Background*/}
      <div
        style={{
          backgroundSize: "100%",
          backgroundImage: `url('./assets/ui/bg_${DATA.planets[gameData.level]}.png')`,
        }}
        className={"pixel bg-no-repeat h-screen flex flex-col items-center justify-center w-full"}
      >
        {/* Window */}
        <div className={"w-full flex flex-col flex-1 items-center mt-20"}>
          <h1 className={"font-bold text-5xl text-white"}>
            {DATA.planets[gameData.level]} ${gameData.money.toLocaleString()}
          </h1>
          <br />
          <button
            className={"btn-blue"}
            onClick={() => {
              dispatch({ type: GameDataActions.INCREASE_MONEY, payload: 10_000 });
            }}
          >
            Increase Money (10K)
          </button>
          <br />
          <div className={"space-x-4"}>
            {DATA.planets.map((planet, index) => {
              return (
                <button
                  key={planet}
                  className={"btn-red"}
                  onClick={() => {
                    dispatch({ type: GameDataActions.SET_LEVEL, payload: index });
                  }}
                >
                  {planet}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bar */}
        <div
          style={{
            backgroundSize: "100% 60%",
            backgroundImage: `url('./assets/ui/bar_${DATA.planets[gameData.level]}.png')`,
          }}
          className={"w-full h-2/5 flex justify-evenly items-center mt-[200px] bg-no-repeat bg-bottom"}
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
    </div>
  );
};

export default Game;
