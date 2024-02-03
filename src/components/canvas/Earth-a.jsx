import React from "react";
import { Canvas } from "@react-three/fiber";
import EarthObject from "./Earth1";
import { OrbitControls } from "@react-three/drei";


const Earth2 = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.02} />
      <OrbitControls   />
      <pointLight position={[-4, 2, 4]} />
      
      <EarthObject />
    </Canvas>
  );
};

export default Earth2;