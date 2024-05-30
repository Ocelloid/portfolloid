"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useCallback, useLayoutEffect, useRef } from "react";
import { ReactTyped } from "react-typed";

const TAGS = [
  "FE-dev",
  "Фронтенд-разработчик",
  "UI/UX-дизайнер",
  "Создатель сайтов",
  "Программист",
  "Продвинутый оператор ЭВМ",
];

export default function Hero() {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const xPercentRef = useRef(0);
  const directionRef = useRef(-1);

  const animate = useCallback(() => {
    if (xPercentRef.current < -95) {
      xPercentRef.current = 5;
    }
    if (xPercentRef.current > 5) {
      xPercentRef.current = -95;
    }
    if (!!firstText.current)
      gsap.set(firstText.current, { xPercent: xPercentRef.current });
    if (!!secondText.current)
      gsap.set(secondText.current, { xPercent: xPercentRef.current });
    requestAnimationFrame(animate);
    xPercentRef.current += 0.03 * directionRef.current;
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.addEventListener("refresh", function () {
      if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
      }
    });
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (directionRef.current = e.direction * -1),
      },
      x: "-250px",
    });
    requestAnimationFrame(animate);
  }, [animate]);

  return (
    <>
      <div className="relative h-screen">
        <Image
          fill={true}
          priority={true}
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          src="/images/hero_background.jpg"
          alt="hero"
        />
        <div className="absolute bottom-[100px] md:bottom-[50px]">
          <div
            ref={slider}
            className="[&>*]:white relative text-nowrap [&>*]:m-0 [&>*]:pr-12 [&>*]:text-[50px] [&>*]:font-semibold [&>*]:drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)] [&>*]:sm:text-[80px] [&>*]:md:text-[110px] [&>*]:lg:text-[140px] [&>*]:xl:text-[170px] [&>*]:2xl:text-[200px]"
          >
            <p className="relative" ref={firstText}>
              Никита Гребнев
            </p>
            <p className="absolute left-[100%] top-0" ref={secondText}>
              Никита Гребнев
            </p>
          </div>
        </div>
        <div className="white absolute max-w-[90%] p-4 text-2xl font-light md:p-8">
          <p className="m-0 mb-2 drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)] ">
            Ocelloid
          </p>
          <p className="m-0 mb-2 drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]">
            <ReactTyped
              backSpeed={10}
              cursorChar="_"
              loop={true}
              strings={TAGS}
              typeSpeed={25}
            />
          </p>
        </div>
      </div>
    </>
  );
}
