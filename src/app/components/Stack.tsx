"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

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

  return (
    <>
      <div className="relative h-screen p-8">
        <p className="text-2xl font-semibold md:text-6xl">Стек технологий</p>
        <p className="text-sm font-light md:text-2xl">
          Что я использую в работе
        </p>
      </div>
    </>
  );
}
