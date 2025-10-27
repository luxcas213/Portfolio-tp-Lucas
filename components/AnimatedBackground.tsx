"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

export default function AnimatedBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#f8f8f8",
          },
        },
        fpsLimit: 40,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000",
          },
          links: {
            color: "#b4b4b4",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: { enable: true, area: 1080 } as any,
            value: 200,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.4,
            },
            animation: {
              enable: true,
              speed: 1,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 0.5,
              max: 1.5,
            },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 z-0"
    />
  );
}

