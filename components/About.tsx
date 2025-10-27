"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="sobre-mi"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-y-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3a4151] mb-6 sm:mb-8">
          Sobre mí
        </h2>
        <div className="space-y-4 text-base sm:text-lg md:text-xl text-[#3a4151]">
          <p>
            Soy Lucas Garbate, Full Stack Developer y entusiasta de Inteligencia Artificial 
            y desarrollo de videojuegos. Me apasiona crear aplicaciones web y móviles 
            con diseño limpio y funcional, enfocándome en proyectos que combinan 
            innovación y experiencia de usuario.
          </p>
          <p>
            Siempre busco aprender nuevas tecnologías y llevar mis ideas a la práctica, 
            explorando desde desarrollo web moderno con React y Next.js hasta aplicaciones 
            móviles con React Native y sistemas backend robustos con Django y Prisma.
          </p>
          <p>
            Mi enfoque combina creatividad técnica con resolución de problemas, 
            trabajando tanto en proyectos personales como en soluciones profesionales 
            que marcan la diferencia.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "5+", label: "Años de experiencia" },
            { value: "10+", label: "Proyectos completados" },
            { value: "3", label: "Tecnologías dominadas" },
            { value: "2", label: "Hackathons ganados" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#f3023d]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#3a4151] mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
