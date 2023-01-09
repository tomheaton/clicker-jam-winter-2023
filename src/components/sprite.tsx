import { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Sprite: React.FC<ThreeElements["sprite"] & {textureName: string}> = ({
  textureName,
  ...rest
}) => {
  const sprite = useRef<THREE.Sprite>(null!);

  // Loader uses path relative to root/public/
  const texture = new THREE.TextureLoader().load("./assets/sprites/" + textureName);
  // NOTE: perhaps use nearest filter for minification too
  // NOTE: use nearest filter so that sprites don't look blurry when they're larger
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  texture.magFilter = THREE.NearestFilter;

  return (
    <sprite {...rest} ref={sprite}>
      <spriteMaterial map={texture} />
    </sprite>
  );
};

export default Sprite;
