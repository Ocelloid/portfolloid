"use client";
import { projects } from "./data";
import Card from "~/components/ParallaxCard";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { type Tech, getTechnologies } from "~/server/db/queries";

export default function Pets() {
  const [technologies, setTechnologies] = useState<Tech[]>([]);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    void getTechnologies().then((techs) => setTechnologies(techs));
  }, []);

  return (
    <div className="flex flex-col">
      <div className="container sticky top-0 mx-auto p-4 md:px-20 md:pt-20">
        <h1 className="text-4xl font-bold">Проекты</h1>
        <p className="mt-4 text-lg">
          Сайты, над которыми я работаю в данный момент.
        </p>
      </div>
      <div className="container top-0 mx-auto p-1 md:px-20" ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              {...project}
              techs={technologies.filter((tech) =>
                project.stack
                  .map((t) => t.toLowerCase().replace(" ", ""))
                  .includes(tech.name?.toLowerCase().replace(" ", "") ?? ""),
              )}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
}
