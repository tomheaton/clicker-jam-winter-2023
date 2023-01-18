import React, { useEffect, useState } from "react";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { Drink, Marker } from "@utils/types";
import ClickMarker from "@components/click_marker";
import { getIngredientsUpgradedOnce } from "@utils/index";

const TIME_VALUE: number = 0.25;
const DRINK_SELL_VALUE: number = 5;

type Props = {
  drink: Drink;
};

const DrinkButton: React.FC<Props> = ({
                                        drink: { name, texture, ingredients, cooldown },
                                      }) => {
  const { data, dispatch } = useGameData();

  // TODO: remove cooldown
  // NOTE(gonk): i left it for now so we can copy it to the drinks per second logic
  const [onCooldown, setOnCooldown] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const [stage, setStage] = useState<number>(1);
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    setStage(getIngredientsUpgradedOnce(ingredients, data.ingredients) + 1);
  }, [data.ingredients, data.level]);

  useEffect(() => {
    return;
    // const markerRemover = setTimeout(() => {
    const markerRemover = setInterval(() => {
      setMarkers((markers) => markers.slice(1));
    }, 1_000);

    return () => {
      // clearTimeout(markerRemover);
      clearInterval(markerRemover);
    };
  }, [markers]);

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
    dispatch({ type: GameDataActions.INCREASE_MONEY, payload: DRINK_SELL_VALUE });
  };

  const handleClick = () => {
    let numberOfIngredientsUpgradedOnce = getIngredientsUpgradedOnce(ingredients, data.ingredients);

    setStage(s => s + 1);

    console.log(stage)
    console.log(ingredients.length)

    if (stage < (ingredients.length + 1)) return;

    setStage(numberOfIngredientsUpgradedOnce + 1);
    console.log(stage)

    dispatch({
      type: GameDataActions.INCREASE_MONEY,
      payload: DRINK_SELL_VALUE * data.drinkPrice,
    });

    setMarkers([...markers, {
      money: DRINK_SELL_VALUE * data.drinkPrice * (data.drinksPerClick - numberOfIngredientsUpgradedOnce),
      location: ["text-left", "text-center", "text-right"][Math.floor(Math.random() * 3)],
    }]);

    /*setTimeout(() => {
      setMarkers((markers) => markers.slice(1));
    }, 4_000);*/
  };

  return (
    <button
      className={"w-full relative"}
      onClick={handleClick}
    >
      {markers.length > 0 && markers.reverse().map((marker, i) => (
        <ClickMarker key={i} marker={marker} />
      ))}
      <img
        className={"pixel png-shadow w-full h-full hover:scale-110 hover:ease-in-out active:scale-125 "}
        src={((stage == ingredients.length+1) && (texture === "final_elixir"))
              ? `assets/drinks/final_elixir_5.gif`
              : `assets/drinks/${texture}_${stage}.png`}
        alt={`${name} sprite`}
      />
    </button>
  );
};

export default DrinkButton;
