"use client";
import { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed right-0 z-[200] p-4 md:p-8">
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-slate-900/75 md:h-20 md:w-20"
        >
          <div
            className={`w-full before:relative before:top-[5px] before:m-auto before:block before:h-[1px] before:w-[40%] before:bg-white before:transition-transform before:duration-300 before:content-[""] after:relative after:top-[-5px] after:m-auto after:block after:h-[1px] after:w-[40%] after:bg-white after:transition-transform after:duration-300 after:content-[""] ${
              isActive
                ? "before:top-[1px] before:-rotate-45 after:top-[-1px] after:rotate-45"
                : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
