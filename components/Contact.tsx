"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/tu-usuario",
      color: "hover:bg-[#333] hover:text-white",
      description: "Mira mis proyectos"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/tu-usuario",
      color: "hover:bg-[#0077b5] hover:text-white",
      description: "Conectemos profesionalmente"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/tu-usuario",
      color: "hover:bg-[#ff0080] hover:text-white",
      description: "Sígueme en Instagram"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:tu@email.com",
      color: "hover:bg-[#f3023d] hover:text-white",
      description: "Envíame un correo"
    }
  ];

  return (
    <motion.section
      id="contacto"
      className="min-h-screen h-auto flex items-start md:items-center justify-center px-4 sm:px-6 py-8 sm:py-20 pb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mt-10 mx-auto max-w-2xl">
        <motion.div
          className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3a4151] mb-3 sm:mb-4 text-center">
            Conectemos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#3a4151] mb-8 sm:mb-12 text-center">
            Encuentra todas mis redes sociales y formas de contacto
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white transition-all duration-300 ${social.color} shadow-md hover:shadow-xl hover:scale-105 hover:border-transparent`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-12 h-12 sm:w-14 sm:h-14 mb-3 text-[#3a4151] group-hover:text-current transition-colors" />
                <h3 className="text-lg sm:text-xl font-bold text-[#3a4151] group-hover:text-current transition-colors mb-1">
                  {social.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-current transition-colors text-center">
                  {social.description}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="mt-8 sm:mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-sm sm:text-base text-gray-600">
              ¿Tienes algún proyecto en mente?{" "}
              <span className="text-[#f3023d] font-semibold">¡No dudes en contactarme!</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}