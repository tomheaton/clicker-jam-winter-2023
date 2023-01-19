import React from "react";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { DATA } from "@data/index";
import CurrencyText from "@components/currency";

type PlanetTeleportButtonProps = {
  planet: string;
  planetIndex: number;
};

const PlanetTeleportButton: React.FC<PlanetTeleportButtonProps> = ({
                                                                     planet,
                                                                     planetIndex,
                                                                   }) => {
  const { data, dispatch } = useGameData();

  // once that is added
  const locked = planetIndex > data.unlockedLevel;

  const changePlanet = () => {
    if (locked) return;

    dispatch({
      type: GameDataActions.SET_LEVEL,
      payload: planetIndex,
    });
  };

  return (
    <div>
      <button onClick={changePlanet}>
        <img
          className={"pixel p-2 w-[100px] h-[100px]"}
          src={`assets/ui/${planet}_sprite${locked ? "_locked" : ""}.png`}
          alt={`Location ${planet} teleport button`}
        />
      </button>
    </div>
  );
};

const RocketShop: React.FC = () => {
  const { data, dispatch } = useGameData();

  const handleBuy = () => {
    if (data.unlockedLevel >= DATA.planets.length - 1 && data.rocketLevel === 3) {
      // TODO: end of game, return for now
      return;
    }

    if (data.rocketLevel === 3) {
      dispatch({ type: GameDataActions.INCREASE_PLANETS_UNLOCKED });
      dispatch({ type: GameDataActions.SET_LEVEL, payload: data.unlockedLevel + 1 });
      dispatch({ type: GameDataActions.SET_ROCKET_LEVEL, payload: 0 });

      console.log("rocket lvl: " + data.rocketLevel);
      return;
    }

    const upgradeCost = DATA.rocketUpgradeCosts[DATA.planets[data.unlockedLevel]][data.rocketLevel];

    if (data.money < upgradeCost) return;

    dispatch({
      type: GameDataActions.DECREASE_MONEY,
      payload: upgradeCost,
    });
    dispatch({ type: GameDataActions.SET_ROCKET_LEVEL, payload: data.rocketLevel + 1 });

    console.log("rocket lvl: " + data.rocketLevel);
  };

  return (
    <div>
      <div className={"flex flex-row justify-center"}>
        { /* Rocket parts TODO: put this back once rocket upgrades are correct in data*/}
        {/* Object.values(DATA.items).map((item, index) => {
          return (
            <RocketUpgrade part={index} />
          );
        }) */}
      </div>
      <div className={"flex flex-row justify-left pt-4"}>
        <div>
          <img
            className={"pixel p-2 w-[190px] h-[260px]"}
            src={`assets/upgrades/ships/ship_${DATA.planets[data.unlockedLevel]}_stage_${data.rocketLevel}.png`}
            alt={`Rocket ship upgrade`}
          />
        </div>
        <div>
          <button
            className={"bg-indigo-400 border-2 rounded-md text-white w-[300px] h-[100px]"}
            disabled={data.money < DATA.rocketUpgradeCosts[DATA.planets[data.unlockedLevel]][data.rocketLevel]}
            onClick={handleBuy}
          >
            {data.rocketLevel === 3 && (
              <p>
                Fully Upgraded!
                Click to travel to {data.unlockedLevel < DATA.planets.length - 1
                ? DATA.planets[data.unlockedLevel + 1].charAt(0).toUpperCase() +
                DATA.planets[data.unlockedLevel + 1].slice(1)
                : "the END"}!
              </p>
            )}
            {data.rocketLevel !== 3 && (
              <div>
                <p>Buy upgrade</p>
                <div>
                  <CurrencyText
                    text={DATA.rocketUpgradeCosts[DATA.planets[data.unlockedLevel]][data.rocketLevel].toLocaleString()}
                    className={"flex justify-center"}
                  />
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
      { /* Rocket menu to go to other planets */}
      <div className={"pt-2"}>
        {data.unlockedLevel > 0 && (
          <div className={"w-full h-full flex flex-row justify-between w-full h-full"}>
            {Object.values(DATA.planets).map((planet, i) => (
              data.level !== i && <PlanetTeleportButton key={i} planet={planet} planetIndex={i} />
            ))}
          </div>
        )}
        {data.unlockedLevel === 0 && (
          <img
            className={"pl-10 pt-5 pixel w-[500px] h-[200px]"}
            src={"assets/ui/sprites_locked_all.png"}
            alt={`Planets locked sprite`}
          />
        )}
      </div>
    </div>
  );
};

export default RocketShop;
