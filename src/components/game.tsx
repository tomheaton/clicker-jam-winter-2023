import IngredientButton from "./ingredient_button";

const Game: React.FC = () => {
  return (
    <div
      className={"bg-black h-screen flex flex-col items-center justify-center"}
    >
      <IngredientButton textureName={"mojito.png"} coolDown={5} />
    </div>
  );
};

export default Game;
