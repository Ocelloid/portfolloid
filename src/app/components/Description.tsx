"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import RoundedButton from "~/app/components/ui/RoundedButton";

export default function Description() {
  const phrase =
    "Помогаю компаниям выделиться в цифровой эпохе. Ничего лишнего, всегда на острие прогресса.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className="my-16 flex flex-wrap justify-center px-8">
      <div className="relative grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        <p className="col-span-2 m-0 gap-2 text-4xl">
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className="relative mr-2 inline-flex overflow-hidden"
              >
                <motion.span
                  className="mr-2"
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          className="col-span-1 text-end text-lg font-light"
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          Меня же выделяют моя страсть к дизайну, талант в программировании и
          внимание к людям, с которыми я работаю.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <RoundedButton className="absolute right-4 top-[60%] flex w-28 cursor-pointer items-center justify-center rounded-full bg-slate-950/50 px-4 py-11 text-white outline-none outline outline-2  outline-offset-2 hover:outline-blue-500 md:right-40">
            <p className="relative z-[1] m-0 font-semibold">Обо мне</p>
          </RoundedButton>
        </div>
      </div>
    </div>
  );
}
