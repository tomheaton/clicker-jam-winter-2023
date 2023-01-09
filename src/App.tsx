import Sprite from "./components/sprite";
import Circle from "./components/circle";
import { Canvas } from "@react-three/fiber";
import React from "react";

const App: React.FC = () => {
  return (
    <div
      className={"bg-black h-screen flex flex-col items-center justify-center"}
    >
      <h1 className={"mt-2 text-white font-bold text-5xl"}>clicker-jam-2023</h1>
      <br />
      <Canvas>
        <ambientLight />
        {/* <Circle /> */}
        <Sprite />
      </Canvas>
    </div>
  );
};

export default App;
