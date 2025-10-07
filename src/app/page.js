"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function EarthSphere() {
  const meshRef = useRef();
  const earthTexture = useLoader(TextureLoader, "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg");

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen overflow-hidden text-white bg-black">
      <Canvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
        camera={{ position: [0, 0, 4] }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <EarthSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>

      <div className="absolute inset-0 z-10 flex flex-col justify-start items-start text-left px-6 pt-10"
        style={{ background: "rgba(0,0,0,0.40)", backdropFilter: "blur(4px)" }}>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Bienvenue dans ton univers 3D
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl mb-10"
        >
          Explore, clique, et ressens la profondeur du monde 🌌
        </motion.p>
        <div className="flex gap-2 flex-wrap justify-start">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#22c55e" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded bg-green-600 text-white font-semibold shadow hover:shadow-lg transition-all"
          >
            Commencer
          </motion.button>
          <motion.button
            onClick={() => router.push("/infos")}
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:shadow-lg transition-all"
          >
            Infos
          </motion.button>
        </div>
      </div>
    </div>
  );
}
