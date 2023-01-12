import { ThreeElements } from "@react-three/fiber";
import { useEffect, useState } from "react";
import SpriteButton from "./sprite_button";

const TIME_VALUE: number = 0.25;

const IngredientButton: React.FC<
  ThreeElements["sprite"] & {
    textureName: string;
    coolDown: number;
  }
> = ({ textureName, coolDown, ...rest }) => {
  const [onCoolDown, setOnCoolDown] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    if (onCoolDown && timer >= coolDown) {
      setTimer(0);
      setOnCoolDown(false);
    }
  }, [coolDown, onCoolDown, timer]);

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

  return (
    <>
      <SpriteButton
        {...rest}
        opacity={onCoolDown ? (coolDown - (coolDown - timer)) / coolDown : 1}
        textureName={textureName}
        onClick={() => setOnCoolDown(true)}
      />
    </>
  );
};

export default IngredientButton;
