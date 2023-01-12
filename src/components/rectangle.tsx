import { ThreeElements } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const Rectangle: React.FC<ThreeElements["mesh"]> = ({ ...rest }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      {...rest}
      ref={mesh}
      scale={3}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, -1]} />
      <meshStandardMaterial color={hovered ? "grey" : 0x00000000} />
    </mesh>
  );
};

export default Rectangle;
