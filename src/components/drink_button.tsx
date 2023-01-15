import React, { useEffect, useState } from "react";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { Drink } from "@utils/types";
import ClickMarker from "@components/click_marker";

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
  const [onCooldown, setOnCooldown] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const [stage, setStage] = useState<number>(1);
  const [markers, setMarkers] = useState<number[]>([]);

  useEffect(() => {
    return;
    // const markerRemover = setTimeout(() => {
    const markerRemover = setInterval(() => {
      setMarkers((markers) => markers.slice(1));
    }, 2_000);

    return () => {
      // clearTimeout(markerRemover);
      clearInterval(markerRemover);
    };
  }, markers);

  useEffect(() => {
    const timerTick = setInterval(() => {
      if (onCooldown) {
        setTimer((t) => t + TIME_VALUE);
      }
    });

    return () => {
      clearInterval(timerTick);
    };
  }, [onCooldown]);

  useEffect(() => {
    if (onCooldown && timer >= cooldown) {
      setTimer(0);
      setOnCooldown(false);
    }
  }, [cooldown, onCooldown, timer]);

  let opacity = onCooldown ? (cooldown - (cooldown - timer)) / cooldown : 1;

  const handleCooldown = () => {
    setOnCooldown(true);
    dispatch({ type: GameDataActions.INCREASE_MONEY, payload: drinkSellValue });
  };

  const handleClick = () => {
    let numberOfIngredientsUpgradedOnce = 0;
    ingredients.forEach((ingredient) => {
      if (gameData.ingredients[ingredient.texture] > 0) {
        numberOfIngredientsUpgradedOnce += 1;
      }
    });

    setStage(s => s + 1);

    if (stage < (ingredients.length + 1)) {
      return;
    }

    setStage(numberOfIngredientsUpgradedOnce + 1);

    const m = drinkSellValue * gameData.drinkPrice;
    dispatch({
      type: GameDataActions.INCREASE_MONEY,
      payload: m,
    });

    setMarkers([...markers, m]);

    /*setTimeout(() => {
      setMarkers((markers) => markers.slice(1));
    }, 2_000);*/
  };

  return (
    <button
      className={"h-full w-full hover:scale-110 hover:ease-in-out active:scale-125 relative"}
      onClick={handleClick}
    >
      <p>
        markers: {markers.length}, state: {stage}
      </p>
      {markers.length > 0 && markers.map((money, i) => <ClickMarker key={i} money={money} />)}
      <img
        className={"pixel w-full h-full"}
        src={`assets/drinks/${texture}_${stage}.png`}
        alt={`${name} sprite`}
      />
    </button>
  );
};

export default DrinkButton;
