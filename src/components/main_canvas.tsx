import { Canvas } from "@react-three/fiber";
import IngredientButton from "./ingredient_button";

const MainCanvas: React.FC = () => {
  return (
    <Canvas>
      <IngredientButton textureName={"mojito.png"} scale={5} cooldown={5} />
      <ambientLight />
    </Canvas>
  );
};

export default MainCanvas;
