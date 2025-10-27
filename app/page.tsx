"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#f8f8f8]">
      {/* Fondo con partículas */}
      <AnimatedBackground />
      
      {/* Contenido con z-index superior */}
      <div className="relative z-10">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {activeSection === "inicio" && <Hero setActiveSection={setActiveSection} />}
        {activeSection === "sobre-mi" && <About />}
        {activeSection === "proyectos" && <Projects />}
        {activeSection === "contacto" && <Contact />}
        {activeSection === "footer" && <Footer />}
      </div>
    </div>
  );
}
