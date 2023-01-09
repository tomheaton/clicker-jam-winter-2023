import { Canvas } from "@react-three/fiber";
import React from "react";
import Sprite from "./components/sprite";

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
        <Sprite textureName={"awd"}/>
      </Canvas>
    </div>
  );
};

export default App;
