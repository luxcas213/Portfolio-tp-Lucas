"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("¡Mensaje enviado! (Esta es una demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.section
      id="contacto"
      className="h-screen flex items-center justify-center px-6 overflow-y-auto pt-24 pb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-2xl">
        <motion.div
          className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#3a4151] mb-4">
            Contacto
          </h2>
          <p className="text-lg md:text-xl text-[#3a4151] mb-12">
            ¿Tienes algún proyecto en mente? ¡Hablemos!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#3a4151] mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#3a4151] focus:outline-none focus:ring-2 focus:ring-[#2196f3] focus:border-[#2196f3] placeholder-gray-400"
                placeholder="Tu nombre"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#3a4151] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#3a4151] focus:outline-none focus:ring-2 focus:ring-[#2196f3] focus:border-[#2196f3] placeholder-gray-400"
                placeholder="tu@email.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#3a4151] mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#3a4151] focus:outline-none focus:ring-2 focus:ring-[#2196f3] focus:border-[#2196f3] resize-none placeholder-gray-400"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-[#f3023d] hover:bg-[#0e0e0e] text-white px-6 py-3 rounded-full font-medium transition shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
