"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function RotatingSphere() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#22c55e"
        emissive="#00ffcc"
        emissiveIntensity={0.4}
        wireframe
      />
    </mesh>
  );
}

export default function Home() {
  useEffect(() => {
    const goFullScreen = async () => {
      if (document.documentElement.requestFullscreen) {
        try {
          await document.documentElement.requestFullscreen();
        } catch (err) {
          console.log("Impossible d’activer le plein écran :", err);
        }
      }
    };
    goFullScreen();
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden text-white">
      {/* Scène 3D */}
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <RotatingSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>

      {/* Interface */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 bg-black/40 backdrop-blur-sm">
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

        <div className="flex gap-6 flex-wrap justify-center">
          {/* Bouton Commencer */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#22c55e" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Commencer
          </motion.button>

          {/* Bouton Infos */}
          <motion.button
            onClick={() => (window.location.href = "/infos")}
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Infos
          </motion.button>
        </div>
      </div>
    </div>
  );
}
