"use client";
import { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import RoundedButton from "./ui/RoundedButton";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <>
      <RoundedButton
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="fixed right-4 top-4 z-[200] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-slate-950/75 text-white outline-none outline outline-2  outline-offset-2 transition-all duration-300 hover:outline-blue-500 md:h-20 md:w-20"
      >
        <div
          className={`w-full before:relative before:m-auto before:block before:h-[1px] before:w-[40%] before:bg-white before:transition-transform before:duration-300 before:content-[""] after:relative after:m-auto after:block after:h-[1px] after:w-[40%] after:bg-white after:transition-transform after:duration-300 after:content-[""] ${
            isActive
              ? "before:top-[1px] before:w-1/2 before:-rotate-45 after:top-[-1px] after:w-1/2 after:rotate-45"
              : "before:top-[5px] after:top-[-5px]"
          }`}
        />
      </RoundedButton>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
