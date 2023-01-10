import { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";

import Sprite from "./sprite";
import Rectangle from "./rectangle";

const SpriteButton: React.FC<ThreeElements["sprite"] & {
  textureName: string,
}> = ({
  textureName,
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
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <spriteMaterial color={hovered ? 0xFF333333 : 0x00000000 }/>
      </sprite>
      <Sprite {...rest} textureName={textureName} />
    </>
  );


};

export default SpriteButton; 