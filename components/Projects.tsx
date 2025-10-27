"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personal",
      description:
        "Mi portfolio en Next.js con Tailwind CSS, mostrando mis proyectos y habilidades.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "tsParticles"],
      link: "https://miportfolio.com",
      image: "portfolio.png",
    },
    {
      title: "ToDo App",
      description:
        "Aplicación de tareas con Next.js y Prisma, con autenticación y sistema de etiquetas.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Auth"],
      link: "https://todoapp.com",
      image: "todo.png",
    },
    {
      title: "Escáner de Suela 3D",
      description:
        "App móvil en React Native que escanea la planta del pie usando LiDAR y genera mallas 3D.",
      technologies: ["React Native", "LiDAR", "3D Modeling", "iOS"],
      link: "https://scanfoot.com",
      image: "scanfoot.png",
    },
    {
      title: "Juego 2D Top-Down",
      description:
        "Juego tipo roguelike en Unity donde el jugador sube de nivel, con enemigos inteligentes y cartas de acción.",
      technologies: ["Unity", "C#", "Game Design", "AI"],
      link: "https://roguelikegame.com",
      image: "game2d.png",
    },
    {
      title: "Sistema de Gestión de Pedidos",
      description:
        "Web app en Django para restaurantes, gestionando platos, pedidos y usuarios.",
      technologies: ["Django", "Python", "PostgreSQL", "REST API"],
      link: "https://restaurantmanager.com",
      image: "restaurant.png",
    },
  ];

  return (
    <motion.section
      id="proyectos"
      className="min-h-screen h-auto flex items-start md:items-center justify-center px-4 sm:px-6 py-8 sm:py-20 pb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3a4151] mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Proyectos
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#3a4151] mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Algunos de los proyectos en los que he trabajado recientemente.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-[#f3023d] transition hover:shadow-2xl hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#3a4151] mb-2 sm:mb-3">
                {project.title}
              </h3>
              <p className="text-[#3a4151] mb-3 sm:mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 sm:px-3 py-1 bg-[#f3023d] text-white rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-[#f3023d] hover:text-[#0e0e0e] transition"
              >
                Ver proyecto
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
