import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "~/components/animation";
import NavLink from "./NavLink";
import Curve from "./Curve";
import Footer from "./Footer";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const navItems = [
  {
    title: "Домой",
    href: "/",
  },
  // {
  //   title: "Обо мне",
  //   href: "/about",
  // },
  {
    title: "Технологии",
    href: "/stack",
  },
  {
    title: "Проекты",
    href: "/pets",
  },
  {
    title: "Контакты",
    href: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="white fixed right-0 top-0 z-[100] h-screen bg-slate-900"
    >
      <div className="box-border flex h-full flex-col justify-between p-12 text-slate-200">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="mt-20 flex flex-col gap-2 text-5xl "
        >
          <div className="mb-10 flex flex-row items-center justify-start gap-2 border-b-2 border-b-slate-200 text-xs uppercase">
            <p>Меню</p>
            <SignedOut>
              <div className="ml-auto block">
                <SignInButton>Войти</SignInButton>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="ml-auto block">
                <UserButton />
              </div>
            </SignedIn>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isDisabled={data.href == pathname}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
