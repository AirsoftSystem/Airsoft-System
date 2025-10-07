"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Texture URLs
const EARTH_DAY = "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg";
const EARTH_CLOUDS = "https://www.solarsystemscope.com/textures/download/2k_earth_clouds.jpg";
const EARTH_SPECULAR = "https://www.solarsystemscope.com/textures/download/2k_earth_specular_map.png";

function Earth() {
  const earthRef = useRef();
  const cloudsRef = useRef();

  // Load textures
  const [colorMap, cloudsMap, specularMap] = useLoader(TextureLoader, [
    EARTH_DAY,
    EARTH_CLOUDS,
    EARTH_SPECULAR,
  ]);

  // Rotation animée
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (earthRef.current) earthRef.current.rotation.y = elapsed * 0.25;
    if (cloudsRef.current) cloudsRef.current.rotation.y = elapsed * 0.3;
  });

  return (
    <>
      {/* Terre */}
      <mesh ref={earthRef} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          specularMap={specularMap}
          specular={0x222222}
          shininess={20}
        />
      </mesh>
      {/* Nuages transparents au-dessus */}
      <mesh ref={cloudsRef} scale={1.82}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen overflow-hidden text-white bg-black">
      {/* Scène 3D */}
      <Canvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
        camera={{ position: [0, 0, 4] }}
      >
        {/* Lumières */}
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        {/* Etoiles animées */}
        <Stars radius={100} depth={60} count={9000} factor={4} fade speed={1} />
        {/* Terre */}
        <Earth />
        {/* Contrôles */}
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.35} />
      </Canvas>
      {/* Interface */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 bg-black/40 backdrop-blur-sm pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 pointer-events-auto"
        >
          Bienvenue dans ton univers 3D
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl mb-10 pointer-events-auto"
        >
          Explore, clique, et ressens la profondeur du monde 🌍
        </motion.p>
        <div className="flex gap-6 flex-wrap justify-center pointer-events-auto">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#22c55e" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Commencer
          </motion.button>
          <motion.button
            onClick={() => router.push("/infos")}
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
