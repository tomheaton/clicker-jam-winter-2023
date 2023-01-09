import Sprite from "./sprite";
import { Canvas } from "@react-three/fiber";

const MainCanvas: React.FC = () => {
  return (
    <Canvas>
      <Sprite textureName={"mojito.png"} scale={7}/>
    </Canvas>
  );
};


export default MainCanvas;