import { useEffect, useState } from "react";

const TIME_VALUE: number = 0.25;

const IngredientButton: React.FC<{
  textureName: string;
  coolDown: number;
}> = ({ textureName, coolDown }) => {
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

  return (
    <button
      className={"border-2 border-white"}
      onClick={() => setOnCoolDown(true)}
      disabled={onCoolDown}
    >
      <img
        style={{
          imageRendering: "pixelated",
          opacity,
        }}
        className={"w-[200px] h-[200px]"}
        src={`assets/sprites/${textureName}`}
        alt={`${textureName} sprite`}
      />
    </button>
  );
};

export default IngredientButton;
