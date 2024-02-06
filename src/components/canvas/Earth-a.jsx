import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const scatterParticles = (particleCount, radius) => {
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    // Generate random spherical coordinates
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    // Convert spherical coordinates to Cartesian coordinates
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    particles.push([x, y, z]);
  }

  return particles;
};

const ParticleSphere = ({ particleCount, particleSize, radius }) => {
  const particles = scatterParticles(particleCount, radius);

  return (
    <>
      {particles.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[particleSize, 24, 24]} />
          <meshStandardMaterial color="#00ff41" />
        </mesh>
      ))}
    </>
  );
};

const Earth2 = () => {
  const particleCount = 5000;
  const particleSize = 0.0025;
  const radius = 2;

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false}/>
      <ParticleSphere particleCount={particleCount} particleSize={particleSize} radius={radius} />
    </Canvas>
  );
};

export default Earth2;
