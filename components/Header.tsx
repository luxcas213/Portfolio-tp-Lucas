"use client";

import { useState } from "react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#3a4151]">
            Lucas Garbate
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => navigateToSection("inicio")}
              className={`transition-colors font-medium ${
                activeSection === "inicio"
                  ? "text-[#f3023d]"
                  : "text-[#3a4151] hover:text-[#f3023d]"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => navigateToSection("sobre-mi")}
              className={`transition-colors font-medium ${
                activeSection === "sobre-mi"
                  ? "text-[#f3023d]"
                  : "text-[#3a4151] hover:text-[#f3023d]"
              }`}
            >
              Sobre mí
            </button>
            <button
              onClick={() => navigateToSection("proyectos")}
              className={`transition-colors font-medium ${
                activeSection === "proyectos"
                  ? "text-[#f3023d]"
                  : "text-[#3a4151] hover:text-[#f3023d]"
              }`}
            >
              Proyectos
            </button>
            <button
              onClick={() => navigateToSection("contacto")}
              className={`transition-colors font-medium ${
                activeSection === "contacto"
                  ? "text-[#f3023d]"
                  : "text-[#3a4151] hover:text-[#f3023d]"
              }`}
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#3a4151]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            <button
              onClick={() => navigateToSection("inicio")}
              className={`text-left transition-colors font-medium ${
                activeSection === "inicio"
                  ? "text-[#f3023d]"
                  : "text-[#3a4151] hover:text-[#f3023d]"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => navigateToSection("sobre-mi")}
              className={`text-left transition-colors font-medium ${
                activeSection === "sobre-mi"
                  ? "text-[#f3023d]"
                  : "text-[#3a4151] hover:text-[#f3023d]"
              }`}
            >
              Sobre mí
            </button>
            <button
              onClick={() => navigateToSection("proyectos")}
              className={`text-left transition-colors font-medium ${
                activeSection === "proyectos"
                  ? "text-[#f3023d]"
                  : "text-[#3a4151] hover:text-[#f3023d]"
              }`}
            >
              Proyectos
            </button>
            <button
              onClick={() => navigateToSection("contacto")}
              className={`text-left transition-colors font-medium ${
                activeSection === "contacto"
                  ? "text-[#f3023d]"
                  : "text-[#3a4151] hover:text-[#f3023d]"
              }`}
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
