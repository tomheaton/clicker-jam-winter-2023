import Circle from "./circle";
import Sprite from "./sprite";
import SpriteButton from "./sprite_button";
import IngredientButton from "./ingredient_button";
import { Canvas } from "@react-three/fiber";

const MainCanvas: React.FC = () => {

    return (
        <Canvas>
            <IngredientButton textureName={"mojito.png"} scale={5} cooldown={5} />
            <ambientLight />
        </Canvas>
    );
};

export default MainCanvas;
