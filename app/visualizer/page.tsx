"use client";

import { useRef, useState, useEffect, Component, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Simulator } from "@/lib/Simulator";
import VisMenu from "@/components/visualizer/VisMenu";
import { PerspectiveCamera } from "three";

import { OrbitControls } from "@react-three/drei";

export default function Page() {
  let meshRef = useRef();

  let ts = new Array<number>();
  let vertices = new Array<[number, number, number]>();
  let segments = new Array<
    [[number, number, number], [number, number, number]]
  >();

  let [sim, setSim] = useState<Simulator | null>(
    new Simulator({ ts, vertices, segments })
  );

  return (
    <div className="w-full h-full">
      <VisMenu sim={[sim, setSim]} />
      <div className="w-full h-[50rem] z-0">
        <Canvas>
          <perspectiveCamera position={[0, 0, 10]}></perspectiveCamera>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <sim.render />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
