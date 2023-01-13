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
          Money: {JSON.stringify(gameData.money, null, 2)}
        </p>

        <p className={""}>
          Drink selling price: TODO {}
        </p>

        <p className={""}>
          Drinks/click: TODO {}
        </p>

        <p className={""}>
          Drinks/s: TODO {}
        </p>

      </div>
    </div>
  );
};

export default StatsMenu;
