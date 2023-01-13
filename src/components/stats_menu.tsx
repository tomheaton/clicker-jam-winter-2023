import { useContext } from "react";
import {
  GameDataContext,
} from "../hooks/game_data";

const StatsMenu: React.FC = () => {
  const gameData = useContext(GameDataContext);

  return (
    <div className={""}>
      <h1 className={"text-center p-7"}>Stats</h1>  
      <div className={"p-7"}>

        <p className={""}>
          Money: ${JSON.stringify(gameData.money, null, 2)}
        </p>

        <p className={""}>
          Drink selling price: {JSON.stringify(gameData.drinkPrice, null, 2)}
        </p>

        <p className={""}>
          Drinks/click: {JSON.stringify(gameData.drinksPerClick, null, 2)}
        </p>

        <p className={""}>
          Drinks/s: {JSON.stringify(gameData.drinksPerSecond, null, 2)}
        </p>

      </div>
    </div>
  );
};

export default StatsMenu;
