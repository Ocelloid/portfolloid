"use client";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Fragment } from "react";
import stack from "./stack.json";
import RoundedButton from "./ui/RoundedButton";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.addEventListener("refresh", function () {
  if (document.body.getAttribute("style") === "") {
    document.body.removeAttribute("style");
  }
});

export default function Stack() {
  const component = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
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

  const reverseStack = [...stack].reverse();

  return (
    <>
      <div className="relative">
        <p className="px-8 text-2xl font-semibold md:text-6xl">
          Стек технологий
        </p>
        <p className="mb-4 px-8 text-sm font-light md:text-2xl">
          Что я использую в работе
        </p>
        <section className="wrapper overflow-hidden" ref={component}>
          {stack.map((tech, i) => (
            <div
              key={i}
              className="tech-row mb-2 flex items-center justify-center gap-4 text-slate-700"
              aria-label={tech.name || ""}
            >
              {[...reverseStack, tech, ...stack].map((_, index) => (
                <Fragment key={index}>
                  <span
                    className={
                      "tech-item whitespace-nowrap text-2xl font-extrabold uppercase tracking-tighter"
                    }
                    style={{
                      color:
                        index === stack.length && _.color ? _.color : "inherit",
                    }}
                  >
                    {_.name}
                  </span>
                  <span className="text-xs">
                    <MdCircle />
                  </span>
                </Fragment>
              ))}
            </div>
          ))}
        </section>
        <div data-scroll data-scroll-speed={0.1}>
          <RoundedButton className="absolute left-16 top-[80%] flex w-28 cursor-pointer items-center justify-center rounded-full bg-slate-950/50 px-4 py-11 text-white outline-none outline outline-2 outline-offset-2 hover:outline-blue-500 md:left-40 md:right-40">
            <p className="relative z-[1] m-0 font-semibold">Подробнее</p>
          </RoundedButton>
        </div>
      </div>
    </>
  );
}
