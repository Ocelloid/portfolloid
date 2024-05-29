"use client";
import Hero from "~/app/components/Hero";
import Stack from "~/app/components/Stack";
import Description from "~/app/components/Description";
import Gallery from "~/app/components/Gallery";
import Contact from "~/app/components/Contact";
import Footer from "~/app/components/Footer";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

export default function HomePage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <main onMouseMove={handleMouseMove}>
      <div className="group flex flex-col overflow-hidden bg-gradient-to-b from-slate-700 to-slate-950 text-white">
        <motion.div
          className="transtition fixed inset-0 opacity-0 duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, #020617, transparent 125%)`,
          }}
        />
        <Hero />
        <Description />
        <Stack />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
