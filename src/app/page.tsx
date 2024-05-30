"use client";
import Hero from "~/app/components/Hero";
import Stack from "~/app/components/Stack";
import Description from "~/app/components/Description";
import Gallery from "~/app/components/Gallery";
import Contact from "~/app/components/Contact";
import Footer from "~/app/components/Footer";
import Preloader from "~/app/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        setIsLoading(false);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Description />
      <Stack />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
