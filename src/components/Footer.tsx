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
              <a className="flex min-w-28 flex-row items-center gap-1">
                <RxGithubLogo />
                GitHub
              </a>
              <a className="flex min-w-28 flex-row items-center gap-1">
                <RxLinkedinLogo />
                LinkedIn
              </a>
              <a className="flex min-w-28 flex-row items-center gap-1">
                <RxVercelLogo />
                Vercel
              </a>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <h3 className="min-w-44 uppercase text-[#ffffff80]">
                Социальные сети
              </h3>
              <a className="flex min-w-28 flex-row items-center gap-1">
                <LiaTelegram />
                Telegram
              </a>
              <a className="flex min-w-28 flex-row items-center gap-1">
                <SlSocialVkontakte />
                VKontakte
              </a>
              <a className="flex min-w-28 flex-row items-center gap-1">
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
