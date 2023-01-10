import Circle from "./circle";
import Sprite from "./sprite";
import SpriteButton from "./sprite_button";
import { Canvas } from "@react-three/fiber";

const MainCanvas: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <SpriteButton textureName={"mojito.png"} scale={5}/>
    </Canvas>
  );
};

export default MainCanvas;