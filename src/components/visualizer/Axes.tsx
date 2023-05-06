import * as THREE from "three";
import { v4 as randomUUID } from "uuid";

export default function Axes() {
  return (
    <>
      <arrowHelper
        args={[
          new THREE.Vector3(1, 0, 0),
          new THREE.Vector3(0, 0, 0),
          1,
          0xff0000,
        ]}
      />
      <arrowHelper
        args={[
          new THREE.Vector3(0, 1, 0),
          new THREE.Vector3(0, 0, 0),
          1,
          0x00ff00,
        ]}
      />
      <arrowHelper
        args={[
          new THREE.Vector3(0, 0, 1),
          new THREE.Vector3(0, 0, 0),
          1,
          0x0000ff,
        ]}
      />
    </>
  );
}
