"use client";
import {
  RxVercelLogo,
  RxInstagramLogo,
  // RxLinkedinLogo,
  RxGithubLogo,
} from "react-icons/rx";
import { SlSocialVkontakte } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { SiHabr } from "react-icons/si";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <div
      className="relative h-[180px] md:h-[80px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 flex h-[180px] w-full flex-col justify-between bg-slate-600 px-12 py-4 md:h-[80px]">
        <div>
          <div className="flex shrink-0 flex-row justify-between md:flex-col">
            <div className="flex flex-col gap-2 md:flex-row">
              <h3 className="min-w-20 uppercase text-[#ffffff80]">Работа</h3>
              <a
                href="https://perm.hh.ru/resume/95971ef6ff0d093c280039ed1f5a4262464954"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <p className="text-md min-w-5 font-bold">hh</p>
                HeadHunter
              </a>
              <a
                href="https://github.com/ocelloid/"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <RxGithubLogo className="min-w-5" />
                GitHub
              </a>
              <a
                href="https://vercel.com/ocelloids-projects"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <RxVercelLogo className="min-w-5" />
                Vercel
              </a>
              <a
                href="https://career.habr.com/ocelloid"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <SiHabr className="min-w-5" />
                Habr
              </a>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <h3 className="min-w-20 uppercase text-[#ffffff80]">Соцсети</h3>
              <a
                href="https://t.me/ocelloid"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <LiaTelegram className="min-w-5" />
                Telegram
              </a>
              <a
                href="https://vk.com/ocelloid"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <SlSocialVkontakte className="min-w-5" />
                ВКонтакте
              </a>
              <a
                href="https://www.instagram.com/lateral_move"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <RxInstagramLogo className="min-w-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
