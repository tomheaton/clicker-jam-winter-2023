import { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";

import Sprite from "./sprite";
import Rectangle from "./rectangle";

const SpriteButton: React.FC<ThreeElements["sprite"] & {
  textureName: string,
  onClick: any, // TODO: type of function
  opacity?: number,
}> = ({
  textureName,
  onClick,
  opacity,
  ...rest
}) => {

  const mesh = useRef<THREE.Mesh>(null!);
  const sprite = useRef<THREE.Sprite>(null!);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <sprite 
        {...rest} 
        ref={sprite}
        onClick={() => { setActive(!active); onClick(); }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <spriteMaterial color={hovered ? 0xFF333333 : 0xFF222222 } opacity={opacity}/>
      </sprite>
      <Sprite {...rest} textureName={textureName} opacity={opacity}/>
    </>
  );


};

export default SpriteButton; 
