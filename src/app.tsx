import React, { useEffect, useReducer, useState } from "react";
import Game from "@components/game";
import {
  GameDataActions,
  GameDataContext,
  gameDataReducer,
  GameDataSchema,
  getInitialGameData,
} from "@hooks/game_data";
import { toast } from "react-hot-toast";

const App: React.FC = () => {
  const [start, setStart] = useState<boolean>(false);
  const [gameData, dispatch] = useReducer(gameDataReducer, getInitialGameData());

  useEffect(() => {
    window.addEventListener("click", async () => {
      const audio = new Audio(`/assets/sounds/click.mp3`);
      await audio.play();
    });

    console.log("loading saved data");
    const savedData = localStorage.getItem("gameData");

    if (!savedData) {
      console.log("no saved data");
      return;
    }

    let parsedData;

    try {
      parsedData = JSON.parse(savedData);
      console.log("parsed data", parsedData);
    } catch (e) {
      console.error(e);
    }
    const result = GameDataSchema.safeParse(parsedData);

    if (!result.success) {
      console.log("resetting local storage");
      console.log(result.error);
      // alert("don't mess with the local storage!");
      return;
    }

    dispatch({
      type: GameDataActions.LOAD,
      payload: result.data,
    });

    return window.removeEventListener("click", async () => {
      const audio = new Audio(`/assets/sounds/click.mp3`);
      await audio.play();
    });
  }, []);

  const handleStart = async () => {
    setStart(true);
    let audio = new Audio("/assets/music/battery_acid.mp3");
    audio.loop = true;
    await audio.play();
  };

  const handleReset = () => {
    console.log("resetting game");
    dispatch({
      type: GameDataActions.LOAD,
      payload: getInitialGameData(),
    });
    toast.success("Game Reset!");
  };

  if (start) {
    return (
      <GameDataContext.Provider value={{ data: gameData, dispatch }}>
        <Game />
      </GameDataContext.Provider>
    );
  }

  return (
    <div
      style={{
        backgroundSize: "100%",
        backgroundImage: `url('./assets/ui/carpet_ceres.png')`,
      }}
      className={"pixel h-screen flex flex-col items-center justify-center bg-repeat-y"}
    >
      <h1 className={"mt-2 font-bold text-5xl text-white"}>
        Cosmic Taphouse
      </h1>
      <br />
      <img
        className={"pixel w-[200px] h-[200px]"}
        src={"/icon.png"}
        alt={"game icon"}
      />
      <br />
      <button onClick={handleStart} className={"btn-indigo"}>
        start game
      </button>
      {import.meta.env.DEV && (
        <>
          <br />
          <button onClick={handleReset} className={"btn-red"}>
            reset
          </button>
        </>
      )}
    </div>
  );
};

export default App;
