import { Fragment, useLayoutEffect } from "react";
import { MdCircle } from "react-icons/md";
import { type Tech } from "~/server/db/queries";
import { gsap } from "gsap";

export default function TechListItem({
  tech,
  stack,
  timeline,
  topRef,
}: {
  tech: Tech;
  stack: Tech[];
  timeline: gsap.core.Timeline;
  topRef: HTMLElement;
}) {
  const reverseStack = stack.reverse();

  useLayoutEffect(() => {
    timeline.fromTo(
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
  }, [timeline, topRef]);

  return (
    <div
      className="tech-row mb-2 flex items-center justify-center gap-4 text-slate-700"
      aria-label={tech.name ?? ""}
    >
      {[...reverseStack, tech, ...stack].map((_, index) => (
        <Fragment key={index}>
          {index === stack.length ? (
            <a
              href={`/stack?s=${_.name}`}
              className={
                "tech-item whitespace-nowrap text-2xl font-extrabold uppercase tracking-tighter"
              }
              style={{
                color: _.color?.toString(),
              }}
            >
              {_.name}
            </a>
          ) : (
            <span
              className={
                "tech-item whitespace-nowrap text-2xl font-extrabold uppercase tracking-tighter"
              }
            >
              {_.name}
            </span>
          )}
          <span className="text-xs">
            <MdCircle />
          </span>
        </Fragment>
      ))}
    </div>
  );
}
