import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

// WARNING(gonk): THIS SHIT NOT WORKING

const Text: React.FC<{
  text: string;
  size: number;
  pos: THREE.Vector3;
  bold: boolean;
}> = ({ text, size, pos, bold = false }) => {
  /*
  const font = new FontLoader().parse('fonts/helvetiker_bold.typeface.json');

  return(
    <mesh position={pos}>
        <textGeometry args={[text, {font, size:size, height: 5}]}/>
    </mesh>
  )
  */

  const font = new FontLoader().parse("fonts/helvetiker_bold.typeface.json");

  const textOptions = {
    font: font,
    size: size,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5,
  };

  const textGeo = new TextGeometry(text, textOptions);

  return <mesh geometry={textGeo} position={pos} />;
};

export default Text;
