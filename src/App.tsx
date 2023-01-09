import { Canvas } from "@react-three/fiber";
import React from "react";
import Sprite from "./components/sprite";
import Text from "./components/text";
import * as THREE from "three";

const App: React.FC = () => {
  return (
    <div
      className={"bg-black h-screen flex flex-col items-center justify-center"}
    >
      <h1 className={"mt-2 text-white font-bold text-5xl"}>clicker-jam-2023</h1>
      <br />
      <Canvas>
        <ambientLight />
        <Sprite textureName={"mojito.png"} scale={8}/>
        <Text text={"Cum"} size={25} pos={new THREE.Vector3(0,0,0)} bold={true} />
      </Canvas>
    </div>
  );
};

export default App;
