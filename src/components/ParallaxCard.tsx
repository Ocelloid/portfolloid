"use client";
import Image from "next/image";
import {
  useTransform,
  useScroll,
  motion,
  type MotionValue,
} from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";
import { useRef } from "react";

export default function Card({
  title,
  description,
  src,
  link,
  repo,
  color,
  i,
  progress,
  range,
  targetScale,
}: {
  title: string;
  description: string;
  src: string;
  link: string;
  repo: string;
  color: string;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-40 flex h-[80vh] items-start justify-center md:top-[200px] md:h-[42vh]">
      <motion.div
        className="relative my-10 flex h-[560px] md:h-[800px] w-full origin-top flex-col rounded-xl p-6 md:h-96 md:p-12"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="m-0 mb-2 text-center text-3xl">{title}</h2>
        <div className="relative flex h-full flex-col gap-4 md:flex-row md:gap-12">
          <div className="flex flex-col">
            <p className="text-lg text-justify [&::first-letter]:text-3xl">{description}</p>
            <a
              href={link}
              target="_blank"
              className="mt-4 flex cursor-pointer items-center gap-2 md:mt-auto"
            >
              <FaLink />
              {link}
            </a>
            <a
              href={repo}
              target="_blank"
              className="flex cursor-pointer items-center gap-2"
            >
              <FaGithub />
              {repo}
            </a>
          </div>

          <div className="relative h-[180px] md:h-full w-full min-w-[200px] overflow-hidden rounded-xl md:max-w-[420px]">
            <motion.div className="h-full w-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
