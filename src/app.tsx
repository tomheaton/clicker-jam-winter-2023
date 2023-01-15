import React, { useEffect, useReducer, useState } from "react";
import Game from "./components/game";
import { GameDataActions, GameDataContext, gameDataReducer, GameDataSchema, initialGameData } from "@hooks/game_data";
import { toast } from "react-hot-toast";

const App: React.FC = () => {
  const [start, setStart] = useState<boolean>(false);
  const [gameData, dispatch] = useReducer(gameDataReducer, initialGameData);

  // useEffect(() => {
  //   console.log("here");

  //   const onUnload = (e: BeforeUnloadEvent) => {
  //     e.preventDefault();
  //     console.log("DON'T LEAVE ME!");
  //     alert("DON'T LEAVE ME!");

  //     const confirmationMessage = "Some message";
  //     e.returnValue = confirmationMessage;
  //     return confirmationMessage;
  //   };

  //   window.addEventListener("beforeunload", onUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", onUnload);
  //   };
  // }, []);

  useEffect(() => {
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
      // alert("don't mess with the local storage!");
      return;
    }

    dispatch({
      type: GameDataActions.LOAD,
      payload: result.data,
    });
  }, []);

  const handleStart = async () => {
    setStart(true);
    // let audio = new Audio("/assets/music/walking_in_the_highlands_1.mp3");
    let audio = new Audio("/assets/music/battery_acid.mp3");
    audio.loop = true;
    await audio.play();
  };

  const handleReset = () => {
    console.log("resetting game");
    dispatch({
      type: GameDataActions.LOAD,
      payload: initialGameData,
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
    <div className={"bg-black-500 h-screen flex flex-col items-center justify-center"}>
      <h1 className={"mt-2 font-bold text-5xl"}>clicker-jam-2023</h1>
      <br />
      <img
        className={"pixel w-[200px] h-[200px]"}
        src={"/icon.png"}
        alt={"game icon"}
      />
      <br />
      <button onClick={handleStart} className={"btn-blue"}>
        start game
      </button>
      <br />
      <button onClick={handleReset} className={"btn-red"}>
        reset
      </button>
    </div>
  );
};

export default App;
