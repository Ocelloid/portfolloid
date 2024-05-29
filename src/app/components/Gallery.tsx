"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export function GalleryItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen min-w-full items-center justify-center">
      {children}
    </div>
  );
}

export default function Gallery({ children }: { children?: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.addEventListener("refresh", function () {
      if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const sections = gsap.utils.toArray(".gallery > div") as HTMLElement[];

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX:
          sections.reduce(
            (a: number, cv: HTMLElement) => a + cv.offsetWidth,
            (sections[0]?.offsetWidth ?? 0) * -1,
          ) * -1,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => "+=" + sectionRef.current?.offsetWidth,
          scrub: 0.6,
          pin: true,
        },
      },
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="gallery relative flex h-screen w-screen flex-row"
        >
          {children}
        </div>
      </div>
    </section>
  );
}
