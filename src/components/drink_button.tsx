import React, { useEffect, useState } from "react";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { Drink } from "@utils/types";
import { DATA } from "../data";
import { number } from "zod";

const TIME_VALUE: number = 0.25;
// TODO: add multiplier
const multiplier = 1.0;
// random sell value for now
const drinkSellValue = 5;

type Props = {
  drink: Drink;
};

const DrinkButton: React.FC<Props> = ({
                                        drink: { name, texture, cooldown, ingredients },
                                      }) => {
  const { gameData, dispatch } = useGameData();

  // TODO: remove cooldown
  // NOTE(gonk): i left it for now so we can copy it to the drinks per second logic
  const [onCooldown, setOnCoolDown] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    const timerTick = setInterval(() => {
      if (onCooldown) {
        setTimer((t) => t + TIME_VALUE);
      }
    }, 250);

    return () => {
      clearInterval(timerTick);
    };
  }, [onCooldown]);

  useEffect(() => {
    if (onCooldown && timer >= cooldown) {
      setTimer(0);
      setOnCoolDown(false);
    }
  }, [cooldown, onCooldown, timer]);

  let opacity = onCooldown ? (cooldown - (cooldown - timer)) / cooldown : 1;

  const handleCooldown = () => {
    setOnCoolDown(true);
    dispatch!({ type: GameDataActions.INCREASE_MONEY, payload: drinkSellValue });
  };

  const increaseStage = () => {
    // This might be working correctly im not sure (gonk)
    let numberOfIngredientsUpgradedOnce = 0;
    for (const ingredient of ingredients) {
      if (gameData.ingredients[ingredient.texture] > 0)
      {
        numberOfIngredientsUpgradedOnce += 1;
      }
    }

    if (numberOfIngredientsUpgradedOnce == ingredients.length)
    {
      setStage(ingredients.length);
      dispatch!({
        type: GameDataActions.INCREASE_MONEY,
        payload: drinkSellValue * gameData.drinkPrice * (gameData.drinksPerClick - numberOfIngredientsUpgradedOnce),
      });
      return;
    }

    dispatch!({
      type: GameDataActions.INCREASE_MONEY,
      payload: drinkSellValue * gameData.drinkPrice,
    });

    if (numberOfIngredientsUpgradedOnce == 0)
    {
      setStage((s) => (s+1) % (ingredients.length+1));
      return;
    }

    setStage((s) => (
      numberOfIngredientsUpgradedOnce + (s + 1 - numberOfIngredientsUpgradedOnce) % (ingredients.length)
    ));
  };

  return (
    <button
      className={"h-full w-full"}
      onClick={increaseStage}
    >
      <img
        className={"pixel w-full h-full hover:scale-[110%] hover:ease-in-out active:scale-[120%]"}
        src={`assets/drinks/${texture}_${stage + 1}.png`}
        alt={`${name} sprite`}
      />
      <p>stage: {stage}</p>
    </button>
  );
};

export default DrinkButton;
