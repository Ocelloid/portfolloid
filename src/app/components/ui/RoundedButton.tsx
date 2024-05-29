"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Magnet from "./Magnet";

export default function RoundedButton({
  children,
  onClick = () => {
    return null;
  },
  backgroundColor = "#455CE9aa",
  className = "border-1 relative flex cursor-pointer items-center justify-center rounded-full border-slate-500 px-4 py-40",
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  onClick?: () => void;
}) {
  const [windowWidth, setWindowWidth] = useState(0);
  const circle = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: number | null = null;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit",
      );
  }, []);

  const manageMouseEnter = (callback: () => void) => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo("enter", "exit");
    }
    callback();
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300) as unknown as number;
  };

  return (
    <Magnet>
      <div
        className={className}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter(() => {
            if (windowWidth < 768)
              setTimeout(() => {
                manageMouseLeave();
              }, 500);
          });
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        onClick={onClick}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="absolute top-full h-[150%] w-full rounded-full"
        />
      </div>
    </Magnet>
  );
}
