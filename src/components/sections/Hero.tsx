"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { motion } from "framer-motion";

function AbstractShape() {
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.distort = 0.4 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#DC2626"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero() {
  const nameLetters = "AYTSAM ULLAH".split("");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <AbstractShape />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
        <h1 className="heading-font text-5xl md:text-8xl lg:text-9xl font-black text-white flex gap-2 md:gap-4 flex-wrap justify-center overflow-hidden">
          {nameLetters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.8 + index * 0.05,
                ease: [0.33, 1, 0.68, 1],
              }}
              className={letter === " " ? "w-4 md:w-8" : "inline-block text-glow"}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4 }}
          className="mt-12"
        >
          <a
            href="/Aytsam_Ullah_Resume.docx"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-transparent border border-accent rounded-full hover:bg-accent/10"
          >
            <span className="mr-2 tracking-widest uppercase text-sm">Download Resume</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator (Right side) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
            <motion.div 
                animate={{ y: [0, 64] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-1/2 bg-accent absolute top-0"
            />
        </div>
        <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  );
}
