import { Canvas } from "@react-three/fiber";

export const App = () => (
  <div className="w-dvw h-dvh">
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  </div>
);
