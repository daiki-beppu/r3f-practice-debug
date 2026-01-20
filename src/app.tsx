import type { Mesh } from "three";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { button, Leva, useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";

export const App = () => (
  <div className="fixed top-0 left-0  w-dvw h-dvh overflow-hidden bg-sky-300/50">
    <Leva collapsed />
    <Canvas
      camera={{
        far: 50,
        fov: 45,
        near: 0.1,
        position: [-4, 3, 6],
      }}
    >
      <Scene />
    </Canvas>
  </div>
);

export const Scene = () => {
  const spherRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (spherRef.current) {
      spherRef.current.rotation.y += delta;
    }
  });

  const { perfVisible } = useControls("perf", {
    perfVisible: true,
  });

  const { position, color, visible } = useControls("sphere", {
    chois: { options: ["a", "b"] },
    clickMe: button(() => console.log("ok")),
    color: "#ff0000",
    myInterval: { max: 10, min: 0, value: [0, 10] },
    position: {
      joystick: "invertY",
      max: 4,
      min: 0,
      step: 0.01,
      value: { x: -2, y: 0 },
    },
    visible: true,
  });

  const { scale } = useControls("cube", {
    scale: { max: 4, min: -4, step: 0.01, value: 1.5 },
  });

  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh visible={visible} position={[position.x, position.y, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position-x={2} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};
