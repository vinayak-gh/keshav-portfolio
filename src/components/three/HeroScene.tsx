"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Icosahedron, Torus, Float } from "@react-three/drei";
import * as THREE from "three";
import ParticleField from "./ParticleField";

function CentralObject() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
    }
    if (torusRef.current) {
      torusRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group>
      {/* Outer ring */}
      <Torus ref={torusRef} args={[2.5, 0.03, 16, 100]}>
        <meshBasicMaterial color="#00ffff" transparent opacity={0.4} />
      </Torus>

      {/* Second ring */}
      <Torus args={[3, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.3} />
      </Torus>

      {/* Core icosahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron ref={meshRef} args={[1.2, 1]}>
          <MeshDistortMaterial
            color="#0ea5e9"
            emissive="#003366"
            emissiveIntensity={0.5}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.9}
            wireframe={false}
          />
        </Icosahedron>
      </Float>

      {/* Wireframe overlay */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron args={[1.3, 1]}>
          <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.15} />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#00ffff" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#7c3aed" intensity={1.5} />
      <pointLight position={[0, 5, -5]} color="#0ea5e9" intensity={1} />

      <CentralObject />
      <ParticleField count={250} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI * 2 / 3}
      />
    </>
  );
}
