import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Garbate - Portfolio",
  description: "Full Stack Developer y entusiasta de Inteligencia Artificial y desarrollo de videojuegos. Portfolio personal de Lucas Garbate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
