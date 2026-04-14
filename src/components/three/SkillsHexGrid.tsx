"use client";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

interface HexNodeProps {
  label: string;
  position: [number, number, number];
  color: string;
  delay?: number;
}

function HexNode({ label, position, color, delay = 0 }: HexNodeProps) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + delay;
      meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.15;
      const scale = hovered ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  const hexColor = new THREE.Color(color);

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[0.45, 0.45, 0.15, 6]} />
        <meshStandardMaterial
          color={hexColor}
          emissive={hexColor}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          transparent
          opacity={hovered ? 0.9 : 0.7}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      {/* Wireframe outline */}
      <mesh>
        <cylinderGeometry args={[0.47, 0.47, 0.17, 6]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
      </mesh>

      {/* Label */}
      <Text
        position={[0, 0.2, 0]}
        fontSize={0.12}
        color={hovered ? "#ffffff" : color}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

const skillNodes: { label: string; position: [number, number, number]; color: string }[] = [
  { label: "Java", position: [0, 0, 0], color: "#f59e0b" },
  { label: "Spring Boot", position: [1.1, 0, 0], color: "#10b981" },
  { label: "Apache Kafka", position: [-1.1, 0, 0], color: "#ef4444" },
  { label: "React.js", position: [0.55, 0, 0.95], color: "#06b6d4" },
  { label: "Next.js", position: [-0.55, 0, 0.95], color: "#8b5cf6" },
  { label: "AI/LLMs", position: [0.55, 0, -0.95], color: "#ec4899" },
  { label: "Microservices", position: [-0.55, 0, -0.95], color: "#3b82f6" },
  { label: "Azure", position: [1.65, 0, 0.95], color: "#0ea5e9" },
  { label: "Tailwind", position: [-1.65, 0, 0.95], color: "#06b6d4" },
  { label: "Supabase", position: [1.65, 0, -0.95], color: "#3ecf8e" },
  { label: "PostgreSQL", position: [-1.65, 0, -0.95], color: "#4169e1" },
  { label: "Vercel", position: [2.2, 0, 0], color: "#ffffff" },
];

export default function SkillsHexGrid() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00ffff" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#7c3aed" intensity={1.5} />

      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <group rotation={[-0.3, 0, 0]}>
          {skillNodes.map((node, i) => (
            <HexNode key={node.label} {...node} delay={i * 0.5} />
          ))}
        </group>
      </Float>
    </>
  );
}
