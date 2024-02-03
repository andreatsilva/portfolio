import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame, extend, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Extend THREE to include OrbitControls
extend({ OrbitControls });

const EarthObject = () => {
  const meshRef = useRef();
  const { camera, gl } = useThree();

  // Rotate the object
  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
  });

  // Load texture
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load("./assets/earth.jpg");

  // Create material with texture
  const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });

  // Create sphere geometry with increased size
  const earthGeometry = new THREE.SphereGeometry(2, 64, 64); // Increased size: radius of 2

  return (
    <>
      <mesh ref={meshRef} geometry={earthGeometry} material={earthMaterial} />
      <OrbitControls  enableZoom={false} target={[0, 0, 0]} />
    </>
  );
};

export default EarthObject;
