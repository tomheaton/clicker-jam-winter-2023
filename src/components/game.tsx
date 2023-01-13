import DrinkButton from "./drink_button";
import IngredientButton from "./ingredient_button";

const Game: React.FC = () => {
  return (
    <div
      className={
        "bg-black h-screen flex flex-col items-center justify-center w-full"
      }
    >
      <div className={"w-full flex flex-1 border-2 border-blue-500"}>top</div>
      <div
        className={"w-full h-2/5 flex justify-evenly border-2 border-red-500"}
      >
        <div className={"grid grid-cols-2 gap-4 m-4 border-2 border-green-500"}>
          <IngredientButton textureName={"mojito.png"} coolDown={5} />
          <IngredientButton textureName={"mojito.png"} coolDown={5} />
          <IngredientButton textureName={"mojito.png"} coolDown={5} />
          <IngredientButton textureName={"mojito.png"} coolDown={5} />
        </div>
        <div className={"flex items-center justify-center"}>
          <DrinkButton textureName={"mojito.png"} coolDown={5} />
        </div>
      </div>
    </div>
  );
};

export default Game;
