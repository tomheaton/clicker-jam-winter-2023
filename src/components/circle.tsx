import * as THREE from "three";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Circle: React.FC<ThreeElements["mesh"]> = (props) => {
  const mesh = useRef<THREE.Mesh>(null!);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 0.5 : 0.25}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <circleGeometry args={[5, 32]}/>
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Circle;
