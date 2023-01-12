import { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";
import SpriteButton from "./sprite_button";
import { useEffect, useState } from "react";

const IngredientButton: React.FC<ThreeElements["sprite"] & {
  textureName: string,
  cooldown: number,
}> = ({
  textureName,
  cooldown,
  ...rest
}) => {
        
    const [onCooldown, setOnCooldown] = useState<boolean>(false);
    const [cooldownStartTime, setCooldownStartTime] = useState<number>(0);
    const [timer, setTimer] = useState<number>(0);

    useEffect(() => {
        // if (onCooldown && (timer >= cooldown)) {
        if (onCooldown)
        {
            // console.log("oncooldown");
            if (timer >= cooldown)
            {
                // console.log("resetting cooldown");
                setTimer(0);
                setOnCooldown(false);
            }
        }
    })

    useEffect(() => {
       const timerTick = setInterval(() => {
           // console.log("hello");
           if (onCooldown)
           {
               setTimer((t) => t+0.25);
           }
        }, 250);

       return () => {
           clearInterval(timerTick);
       }
    }, [onCooldown])

    const PutOnCoolDown = () => {
        setOnCooldown(true);
        // setCooldownStartTime(0);
        // console.log("Gone in cd");
    };

    return (
        <>
            <SpriteButton {...rest} 
                opacity={onCooldown ? (cooldown - (cooldown - timer)) / cooldown : 1}
                textureName={textureName} onClick={PutOnCoolDown} />
        </>
    );
};

export default IngredientButton; 


