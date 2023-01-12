import React, { useState, useEffect } from "react";
import MainCanvas from "./components/main_canvas";
import IngredientButton from "./components/ingredient_button";

const App: React.FC = () => {
  const [start, setStart] = useState<boolean>(false);

  const handleStart = () => {
    setStart(true);
    let audio = new Audio("walking_in_the_highlands_1.mp3")
    audio.loop = true;
    audio.play();
  };

  return (
    <div
      className={"bg-black h-screen flex flex-col items-center justify-center"}
    >
      <h1 className={"mt-2 text-white font-bold text-5xl"}>clicker-jam-2023</h1>
     <br />
      {start ? (
        <MainCanvas></MainCanvas>
      ) : (
        <button
          onClick={handleStart}
          className={
            "px-4 py-2 text-white font-bold rounded-lg bg-blue-500 hover:bg-blue-600"
          }
        >
          start game
        </button>
      )}
    </div>
  );
};

export default App;
