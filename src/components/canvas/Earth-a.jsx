import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { InstancedMesh, SphereGeometry, MeshStandardMaterial, Matrix4, Vector3 } from "three";

const scatterParticles = (particleCount, radius) => {
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    particles.push([x, y, z]);
  }

  return particles;
};

const ParticleSphere = ({ particleCount, particleSize, radius }) => {
  const meshRef = useRef();

  useEffect(() => {
    const particles = scatterParticles(particleCount, radius);
    const instanceMatrix = new Matrix4();
    const positions = [];
    const vector = new Vector3();

    particles.forEach((position) => {
      instanceMatrix.setPosition(vector.fromArray(position));
      meshRef.current.setMatrixAt(positions.length, instanceMatrix);
      positions.push(position[0], position[1], position[2]);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [particleCount, radius]);

  return (
    <instancedMesh ref={meshRef} args={[new SphereGeometry(particleSize, 16, 16), new MeshStandardMaterial({ color: "#FF0000" }), particleCount]}>
    </instancedMesh>
  );
};

const Earth2 = () => {
  const controlsRef = useRef();
  const particleCount = 100000;
  const particleSize = 0.004;
  const radius = 5;
  const cameraDistance = 10.1;

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls
        ref={controlsRef}
        target={[0, 0, 0]}
        maxDistance={cameraDistance}
        minDistance={cameraDistance}
        enableZoom={false}
      />
      <ParticleSphere
        particleCount={particleCount}
        particleSize={particleSize}
        radius={radius}
      />
    </Canvas>
  );
};

export default Earth2;
