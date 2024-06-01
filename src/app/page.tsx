"use client";
import Hero from "~/components/Hero";
import Stack from "~/components/Stack";
import Description from "~/components/Description";
// import Gallery from "~/components/Gallery";
import Preloader from "~/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <meta name="HandheldFriendly" content="true" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Description />
      <Stack />
      {/* <Gallery /> */}
    </main>
  );
}
