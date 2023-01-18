import React, { useState } from "react";
import { GameDataActions, useGameData } from "@hooks/game_data";
import { DATA } from "../data";

// TODO: rocket upgrade on click
// TODO: save unlocked planets

type RocketUpgradeProps = {
  part: number; // rocket part [0-2] (used to show sprite)
};

const RocketUpgrade: React.FC<RocketUpgradeProps> = ({
  part,
}) => {
  return (
    <div>
      <button>
        <img
          className={"pixel w-[120px] h-[120px] m-4"}
          src={`assets/upgrades/rocket_${part + 1}.png`}
          alt={`Rocket part ${part} sprite`}
        />
      </button>
    </div>
  );
}

type PlanetTeleportButtonProps = {
  planet: string;
  planetIndex: number;
};

const PlanetTeleportButton: React.FC<PlanetTeleportButtonProps> = ({
  planet,
  planetIndex,
}) => {
  const { data, dispatch } = useGameData();

  // FIXME: change this to check which planets are unlocked from data,
  // once that is added
  const locked = planetIndex > data.level;

  const changePlanet = () => {
    if (locked) return;

    dispatch({
      type: GameDataActions.SET_LEVEL,
      payload: planetIndex
    });
  }

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
}

const RocketShop: React.FC = ({
}) => {
  const { data } = useGameData();
  
  return (
    <div>
      <h1 className={"text-4xl text-center"}>
        Planet Upgrades
      </h1>
      <div className={"flex flex-row justify-center"}>
        { /* Rocket parts TODO: put this back once rocket upgrades are correct in data*/ }
        {/* Object.values(DATA.items).map((item, index) => {
          return (
            <RocketUpgrade part={index} />
          );
        }) */}
        <RocketUpgrade part={0} />
        <RocketUpgrade part={1} />
        <RocketUpgrade part={2} />
        <RocketUpgrade part={3} />
      </div>
      
      { /* Roket menu to go to other planets */ }
      <div className={"pt-20"}>
        <h1 className={"text-4xl text-center"}>
          Teleport
        </h1>
        {data.level > 0 && (
          <div className={"w-full h-full flex flex-row justify-between w-full h-full"}>
              {Object.values(DATA.planets).map((planet, index) => {
                if (data.level == index) return;
                return (
                  <PlanetTeleportButton planet={planet} planetIndex={index}/>
                );
              })}
          </div>
        )}
        {data.level === 0 && (
          <img
            className={"pixel w-full h-full"}
            src={"assets/ui/sprites_locked_all.png"}
            alt={`Planets locked sprite`}
          />
        )}
      </div>
    </div>
  );
}

export default RocketShop;