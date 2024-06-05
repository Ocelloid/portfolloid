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
import Magnet from "~/components/ui/Magnet";
import { type Tech } from "~/server/db/queries";

export default function Card({
  title,
  description,
  src,
  icon,
  link,
  repo,
  color,
  i,
  progress,
  range,
  targetScale,
  techs,
}: {
  title: string;
  description: string;
  src: string;
  icon: string;
  link: string;
  repo: string;
  color: string;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  techs: Tech[];
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-40 flex h-[75vh] items-start justify-center md:top-[200px] md:h-[42vh]">
      <motion.div
        className="relative my-10 flex h-[520px] w-full origin-top flex-col rounded-xl p-6 md:h-96 md:p-12"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="m-0 mb-2 flex flex-row justify-start gap-1 text-3xl font-semibold">
          <Image
            src={icon}
            alt="icon"
            width={24}
            height={24}
            className="min-w-8 rounded-full py-1"
          />
          {title}
        </h2>
        <div className="relative flex h-full flex-col gap-4 md:flex-row md:gap-12">
          <div className="flex flex-col">
            <p className="text-justify text-lg [&::first-letter]:text-3xl">
              {description}
            </p>
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
            {!!techs && (
              <div className="mt-1 flex min-h-5 flex-row items-center gap-0.5 align-middle">
                {techs.map((tech, index) => (
                  <Magnet pull={0.25} key={`icon_${tech.name}`}>
                    <a href={`/stack?s=${tech.name}`} target="_blank">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          ease: "easeInOut",
                          duration: index / 5,
                        }}
                        className="z-10"
                      >
                        <Image
                          src={tech.icon ?? ""}
                          alt="icon"
                          width={16}
                          height={16}
                        />
                      </motion.div>
                    </a>
                  </Magnet>
                ))}
              </div>
            )}
          </div>

          <div className="relative flex w-full min-w-[200px] flex-grow overflow-hidden rounded-xl md:h-full md:max-w-[420px]">
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
