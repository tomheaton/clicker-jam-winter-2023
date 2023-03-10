import React, { useEffect, useState } from "react";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { Drink, Marker } from "@utils/types";
import DrinkMarker from "@components/drink_marker";
import { getIngredientsUpgradedOnce } from "@utils/index";
import { DATA } from "@data/index";

type Props = {
  drink: Drink;
};

const DrinkButton: React.FC<Props> = ({
                                        drink: { name, texture, ingredients, cooldown },
                                      }) => {
  const { data, dispatch } = useGameData();

  const [stage, setStage] = useState<number>(1);
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    setMarkers([]);
  }, [data.level]);

  useEffect(() => {
    setStage(getIngredientsUpgradedOnce(ingredients, data.ingredients) + 1);
  }, [data.ingredients, data.level]);

  useEffect(() => {
    console.log("markers", markers);
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

  const handleClick = () => {
    let numberOfIngredientsUpgradedOnce = getIngredientsUpgradedOnce(ingredients, data.ingredients); 
    const sellValue = (DATA.drinks[data.level].baseSellPrice + data.drinkPrice) * (data.drinksPerClick - numberOfIngredientsUpgradedOnce);

    setStage(s => s + 1);

    if (stage < (ingredients.length + 1)) return;

    setStage(numberOfIngredientsUpgradedOnce + 1);

    dispatch({
      type: GameDataActions.INCREASE_MONEY,
      payload: sellValue,
    });

    setMarkers([...markers, {
      money: sellValue,
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
        <DrinkMarker key={i} marker={marker} />
      ))}
      <img
        className={"pixel png-shadow w-full h-full hover:scale-110 hover:ease-in-out active:scale-125 "}
        src={((stage == ingredients.length + 1) && (texture === "final_elixir"))
          ? `assets/drinks/final_elixir_5.gif`
          : `assets/drinks/${texture}_${stage}.png`}
        alt={`${name} sprite`}
      />
    </button>
  );
};

export default DrinkButton;
