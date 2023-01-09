import { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Sprite: React.FC = (props: ThreeElements["sprite"]) => {
  const sprite = useRef<THREE.Sprite>(null!);

  const texture = new THREE.TextureLoader().load("./assets/react.png");

  return (
    <sprite {...props} ref={sprite} scale={1}>
      <spriteMaterial map={texture} />
    </sprite>
  );
};

export default Sprite;
