import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import Sprite from "./components/sprite";
import Text from "./components/text";
import * as THREE from "three";

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
        // TODO: extract to GameCanvas component
        <Canvas>
          <ambientLight />
          {/* <Circle /> */}
          <Sprite textureName={"mojito.png"} />
        </Canvas>
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
