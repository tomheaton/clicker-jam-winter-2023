import { useContext } from "react";
import { useEffect, useState } from "react";
import {
  GameDataActions,
  GameDataContext,
  GameDataDispatchContext,
} from "../hooks/game_data";

const TIME_VALUE: number = 0.25;
const multiplier = 1.0;

const DrinkButton: React.FC<{

  textureName: string;
  coolDown: number;
}> = ({ textureName, coolDown }) => {

  const dispatch = useContext(GameDataDispatchContext);

  const drinkSellValue = 5; //random sell value for now

  const [onCoolDown, setOnCoolDown] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const timerTick = setInterval(() => {
      if (onCoolDown) {
        setTimer((t) => t + TIME_VALUE);
      }
    }, 250);

    return () => {
      clearInterval(timerTick);
    };
  }, [onCoolDown]);

  useEffect(() => {
    if (onCoolDown && timer >= coolDown) {
      setTimer(0);
      setOnCoolDown(false);
    }
  }, [coolDown, onCoolDown, timer]);

  let opacity = onCoolDown ? (coolDown - (coolDown - timer)) / coolDown : 1;

  const theWorstPlaceForAFunction = () => {
    dispatch!({ type: GameDataActions.ADD_MONEY, value : drinkSellValue});
  }



  return (
    <button
      className={"border-2 border-white h-full w-full"}
      onClick={() => {
        setOnCoolDown(true);
        theWorstPlaceForAFunction();
      }}
      disabled={onCoolDown}
    >
      <img
        style={{
          imageRendering: "pixelated",
          opacity,
        }}
        className={"w-full h-full"}
        src={`assets/sprites/${textureName}`}
        alt={`${textureName} sprite`}
      />
    </button>
  );
};

export default DrinkButton;
