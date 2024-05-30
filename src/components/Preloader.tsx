"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { preloaderOpacity, preloaderSlideUp } from "./animation";

const words = [
  "Привет",
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150,
    );
  }, [index]);

  return (
    <motion.div
      variants={preloaderSlideUp}
      initial="initial"
      exit="exit"
      className="fixed z-[500] flex h-screen w-screen items-center justify-center bg-slate-950"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="absolute flex flex-row items-center justify-center text-center text-3xl font-bold text-white"
            variants={preloaderOpacity}
            initial="initial"
            animate="enter"
          >
            <span className="mr-2.5 block h-2.5 w-2.5 rounded-full bg-white" />
            {words[index]}
          </motion.p>
        </>
      )}
    </motion.div>
  );
}
