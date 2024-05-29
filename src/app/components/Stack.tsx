"use client";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fragment } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Stack() {
  const component = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert();
  }, []);

  const tech_name = "React";
  const tech_color = "#00D1B2";

  return (
    <>
      <div className="relative h-screen p-8">
        <p className="text-2xl font-semibold md:text-6xl">Стек технологий</p>
        <p className="text-sm font-light md:text-2xl">
          Что я использую в работе
        </p>
        <section className="wrapper overflow-hidden">
          <div
            className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
            aria-label={tech_name || ""}
          >
            {Array.from({ length: 15 }, (_, index) => (
              <Fragment key={index}>
                <span
                  className={
                    "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                  }
                  style={{
                    color: index === 7 && tech_color ? tech_color : "inherit",
                  }}
                >
                  {tech_name}
                </span>
                <span className="text-3xl">
                  <MdCircle />
                </span>
              </Fragment>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
