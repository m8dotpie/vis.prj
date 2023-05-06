import { Simulator } from "@/lib/simulator";
import * as THREE from "three";

export default function Vertex(props) {
  let { position, innerRef, ...rest } = props;
  let sphere = new THREE.SphereGeometry(0.1, 32, 32);
  return (
    <mesh position={position} ref={innerRef}>
      <primitive object={sphere} />
      <meshStandardMaterial />
    </mesh>
  );
}
