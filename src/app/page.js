"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// URLs des textures HD
const EARTH_DAY = "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg";
const EARTH_CLOUDS = "https://www.solarsystemscope.com/textures/download/2k_earth_clouds.jpg";
const EARTH_NIGHT = "https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg";
const EARTH_SPECULAR = "https://www.solarsystemscope.com/textures/download/2k_earth_specular_map.png";
const EARTH_BUMP = "https://www.solarsystemscope.com/textures/download/2k_earth_normal_map.png";

function Earth() {
  const earthRef = useRef();
  const cloudsRef = useRef();

  // Chargement des textures
  const [colorMap, cloudsMap, nightMap, specularMap, bumpMap] = useLoader(TextureLoader, [
    EARTH_DAY,
    EARTH_CLOUDS,
    EARTH_NIGHT,
    EARTH_SPECULAR,
    EARTH_BUMP,
  ]);

  // Rotation animée
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (earthRef.current) earthRef.current.rotation.y = elapsed * 0.2;
    if (cloudsRef.current) cloudsRef.current.rotation.y = elapsed * 0.25;
  });

  return (
    <>
      {/* Terre */}
      <mesh ref={earthRef} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}               // Texture jour
          bumpMap={bumpMap}            // Relief
          bumpScale={0.15}
          specularMap={specularMap}    // Reflets océans
          shininess={16}
          emissiveMap={nightMap}       // Texture nuit
          emissive={'#222'}
        />
      </mesh>
      {/* Nuages transparents */}
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
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        {/* Etoiles animées */}
        <Stars radius={100} depth={60} count={12000} factor={4} fade speed={1.5} />
        {/* Globe terrestre réaliste + nuages */}
        <Earth />
        {/* Contrôles rotatifs */}
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.25} />
      </Canvas>
      {/* Interface texte + boutons */}
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
