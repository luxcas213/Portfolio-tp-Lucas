"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <motion.section
      id="inicio"
      className="h-screen flex items-center justify-center px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Imagen circular a la izquierda */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <Image
                src="/yo.png"
                alt="Lucas Garbate"
                fill
                className="rounded-full object-cover border-4 border-[#f3023d] shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Texto a la derecha */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-[#3a4151] mb-6 ">
              Hola, soy{" "}
              <span className="text-[#f3023d]">
                Lucas Garbate
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#3a4151] mb-8">
              Full Stack Developer y entusiasta de Inteligencia Artificial y desarrollo de videojuegos
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <button
                onClick={() => setActiveSection("proyectos")}
                className="bg-[#f3023d] hover:bg-[#0e0e0e] text-white px-8 py-3 rounded-full font-medium transition shadow-md hover:shadow-lg hover:scale-105"
              >
                Ver proyectos
              </button>
              <button
                onClick={() => setActiveSection("contacto")}
                className="border-2 border-[#f3023d] text-[#f3023d] hover:bg-[#f3023d] hover:text-white px-8 py-3 rounded-full font-medium transition shadow-md hover:shadow-lg hover:scale-105"
              >
                Contactar
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
