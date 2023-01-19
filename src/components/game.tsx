import React, { useEffect } from "react";
import { DATA } from "@data/index";
import { GameDataActions, useGameData } from "@hooks/game_data";
import DrinkButton from "@components/drink_button";
import IngredientButton from "@components/ingredient_button";
import Shop from "@components/shop";
import SlideMenu from "@components/slide_menu";
import StatsMenu from "@components/stats_menu";
import CurrencyText from "@components/currency";

const Game: React.FC = () => {
  const { data, dispatch } = useGameData();

  const currentDrink = DATA.drinks[data.level];
  const currentIngredients = currentDrink.ingredients;
  const mp = parseInt((currentIngredients.length / 2).toFixed(0));

  useEffect(() => {
    const timerTick = setInterval(() => {
      dispatch({
        type: GameDataActions.INCREASE_MONEY,
        payload: (DATA.drinks[data.unlockedLevel].baseSellPrice + data.drinkPrice) * data.drinksPerSecond,
      });
    }, 1_000);

    return () => clearInterval(timerTick);
  }, [data.drinksPerSecond]);

  return (
    // Carpet
    <div
      style={{
        backgroundSize: "100%",
        backgroundImage: `url('./assets/ui/carpet_${DATA.planets[data.level]}.png')`,
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
          backgroundImage: `url('./assets/ui/bg_${DATA.planets[data.level]}.png')`,
        }}
        className={"pixel bg-no-repeat h-screen flex flex-col items-center justify-center w-full"}
      >
        {/* Window */}
        <div className={"w-full flex flex-col flex-1 items-center mt-20"}>
          <CurrencyText
            text={data.money.toLocaleString()}
            className={"font-bold text-5xl text-white"}
          />
          {import.meta.env.DEV && (
            <>
              <br />
              <button
                className={"btn-indigo"}
                onClick={() => {
                  dispatch({ type: GameDataActions.INCREASE_MONEY, payload: 100_000 });
                }}
              >
                Increase Money (100K)
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
            </>
          )}
        </div>

        {/* Bar */}
        <div
          style={{
            backgroundSize: "100% 60%",
            backgroundImage: `url('./assets/ui/bar_${DATA.planets[data.level]}.png')`,
          }}
          className={"w-full h-2/5 flex justify-evenly items-center mt-[200px] bg-no-repeat bg-bottom"}
        >
          <div className={"w-1/4 md:w-2/5 flex items-center justify-evenly m-4"}>
            {currentIngredients.slice(0, mp).map((ingredient) => (
              <IngredientButton
                key={ingredient.name}
                ingredient={ingredient}
                initialLevel={data.ingredients[ingredient.texture]}
              />
            ))}
          </div>

          <div className={"min-w-[150px] w-1/5 h-full -mt-20 z-[20] flex items-center justify-center"}>
            <DrinkButton drink={currentDrink} />
          </div>

          <div className={"w-1/4 md:w-2/5 flex items-center justify-evenly m-4"}>
            {currentIngredients.slice(mp).map((ingredient) => (
              <IngredientButton
                key={ingredient.name}
                ingredient={ingredient}
                initialLevel={data.ingredients[ingredient.texture]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
