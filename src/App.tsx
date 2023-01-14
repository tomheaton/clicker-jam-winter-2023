import React, { useEffect, useReducer, useState } from "react";
import Game from "./components/game";
import {
  GameDataActions,
  GameDataContext,
  gameDataReducer,
  initialGameData,
} from "./hooks/game_data";

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

    const parsedData = JSON.parse(savedData);
    console.log("parsed data", parsedData);

    if (
      !parsedData ||
      !parsedData.money ||
      !parsedData.drinkPrice ||
      !parsedData.drinksPerClick ||
      !parsedData.drinksPerSecond
    ) {
      console.log("resetting local storage");
      // alert("don't mess with the local storage!");
      return;
    }

    dispatch({
      type: GameDataActions.SET_MONEY,
      value: parsedData.money,
    });

    dispatch({
      type: GameDataActions.SET_DRINK_PRICE,
      value: parsedData.drinkPrice,
    });

    dispatch({
      type: GameDataActions.SET_DRINKS_PER_CLICK,
      value: parsedData.drinksPerClick,
    });

    dispatch({
      type: GameDataActions.SET_DRINKS_PER_SECOND,
      value: parsedData.drinksPerSecond,
    });
  }, []);

  const handleStart = () => {
    setStart(true);
    // let audio = new Audio("/assets/music/walking_in_the_highlands_1.mp3");
    let audio = new Audio("/assets/music/battery_acid.mp3");
    audio.loop = true;
    audio.play();
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
      className={
        "bg-black-500 h-screen flex flex-col items-center justify-center"
      }
    >
      <h1 className={"mt-2 font-bold text-5xl"}>clicker-jam-2023</h1>
      <br />
      <img
        style={{
          imageRendering: "pixelated",
        }}
        className={"w-[200px] h-[200px]"}
        src={"/icon.png"}
        alt={"game icon"}
      />
      <br />
      <button onClick={handleStart} className={"btn-blue"}>
        start game
      </button>
    </div>
  );
};

export default App;
