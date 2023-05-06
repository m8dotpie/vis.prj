import { useLayoutEffect } from "react";
import * as THREE from "three";

export default function Segment({ start, end, innerRef }) {
  useLayoutEffect(() => {
    innerRef.current.geometry.setFromPoints(
      [start, end].map((point) => new THREE.Vector3(...point))
    );
  }, [start, end]);
  return (
    <line ref={innerRef}>
      <bufferGeometry />
      <lineBasicMaterial color="hotpink" />
    </line>
  );
}
