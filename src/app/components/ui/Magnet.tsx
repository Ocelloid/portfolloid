"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Magnet({ children }: { children: React.ReactNode }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const magnet = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    if (document.body.getAttribute("style") === "") {
      document.body.removeAttribute("style");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const currentElement = magnet.current;
    if (!currentElement) return;

    const xTo = gsap.quickTo(currentElement, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(currentElement, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!currentElement) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        currentElement.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
      if (windowWidth < 768)
        setTimeout(() => {
          xTo(0);
          yTo(0);
        }, 500);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    currentElement.addEventListener("mousemove", handleMouseMove);
    currentElement.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      currentElement?.removeEventListener("mousemove", handleMouseMove);
      currentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [children, windowWidth]);

  const childAsElement = React.isValidElement(children) ? children : <></>;
  return React.cloneElement(childAsElement, { ref: magnet });
}
