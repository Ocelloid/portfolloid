import {
  RxVercelLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxGithubLogo,
} from "react-icons/rx";
import { SlSocialVkontakte } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";
export default function Footer() {
  return (
    <div
      className="relative h-[160px] md:h-[80px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 flex h-[160px] w-full flex-col justify-between bg-slate-600 px-12 py-4 md:h-[80px]">
        <div>
          <div className="flex shrink-0 flex-row justify-between md:flex-col">
            <div className="flex flex-col gap-2 md:flex-row">
              <h3 className="min-w-44 uppercase text-[#ffffff80]">Работа</h3>
              <a
                href="https://github.com/ocelloid/"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <RxGithubLogo />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nikita-grebnev-b9a2a413b/"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <RxLinkedinLogo />
                LinkedIn
              </a>
              <a
                href="https://vercel.com/ocelloids-projects"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <RxVercelLogo />
                Vercel
              </a>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <h3 className="min-w-44 uppercase text-[#ffffff80]">
                Социальные сети
              </h3>
              <a
                href="https://t.me/ocelloid"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <LiaTelegram />
                Telegram
              </a>
              <a
                href="https://vk.com/ocelloid"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <SlSocialVkontakte />
                ВКонтакте
              </a>
              <a
                href="https://www.instagram.com/lateral_move"
                target="_blank"
                className="flex min-w-28 flex-row items-center gap-1"
              >
                <RxInstagramLogo />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
