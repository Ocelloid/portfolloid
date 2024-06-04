import {
  RxVercelLogo,
  RxInstagramLogo,
  // RxLinkedinLogo,
  RxGithubLogo,
} from "react-icons/rx";
import { SlSocialVkontakte } from "react-icons/sl";
import { SiHabr } from "react-icons/si";
import { LiaTelegram } from "react-icons/lia";

export default function Footer() {
  return (
    <div className="flex w-full flex-row flex-wrap justify-between gap-2 text-sm">
      <div className="flex flex-col gap-1">
        <a
          href="https://perm.hh.ru/resume/95971ef6ff0d093c280039ed1f5a4262464954"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <p className="text-md min-w-5 font-bold">hh</p>
          HeadHunter
        </a>
        <a
          href="https://github.com/ocelloid/"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <RxGithubLogo className="min-w-5" />
          GitHub
        </a>
        <a
          href="https://vercel.com/ocelloids-projects"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <RxVercelLogo className="min-w-5" />
          Vercel
        </a>
        <a
          href="https://career.habr.com/ocelloid"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <SiHabr className="min-w-5" />
          Habr
        </a>
      </div>
      <div className="flex flex-col gap-1">
        <a
          href="https://t.me/ocelloid"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <LiaTelegram className="min-w-5" />
          Telegram
        </a>
        <a
          href="https://vk.com/ocelloid"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <SlSocialVkontakte className="min-w-5" />
          ВКонтакте
        </a>
        <a
          href="https://www.instagram.com/lateral_move"
          target="_blank"
          className="flex flex-row items-center gap-1"
        >
          <RxInstagramLogo className="min-w-5" />
          Instagram
        </a>
      </div>
    </div>
  );
}
