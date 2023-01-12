import { ThreeElements } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const Circle: React.FC<ThreeElements["mesh"]> = ({ ...rest }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      {...rest}
      ref={mesh}
      scale={active ? 0.5 : 0.25}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <circleGeometry args={[5, 32]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Circle;
