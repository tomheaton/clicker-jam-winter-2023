import { useContext } from "react";
import {
  GameDataContext,
} from "../hooks/game_data";

const StatsMenu: React.FC = () => {
  const gameData = useContext(GameDataContext);

  return (
    <div className={"bg-blue-500"}>
      <h1 className={"text-center p-7"}>Stats</h1>  
      <div className={"p-7"}>

        <p className={""}>
          Money: {JSON.stringify(gameData.money, null, 2)}
        </p>

        <p className={""}>
          Drink selling price: {}
        </p>

        <p className={""}>
          Drinks/click: {}
        </p>

        <p className={""}>
          Drinks/s: {}
        </p>

      </div>
    </div>
  );
};

export default StatsMenu;
