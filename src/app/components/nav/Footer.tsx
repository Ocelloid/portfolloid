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
    <div className="flex w-full max-w-72 flex-row flex-wrap justify-between gap-2 text-sm">
      <a className="flex flex-row items-center gap-1">
        <RxGithubLogo />
        GitHub
      </a>
      <a className="flex flex-row items-center gap-1">
        <RxLinkedinLogo />
        LinkedIn
      </a>
      <a className="flex flex-row items-center gap-1">
        <RxVercelLogo />
        Vercel
      </a>
      <a className="flex flex-row items-center gap-1">
        <LiaTelegram />
        Telegram
      </a>
      <a className="flex flex-row items-center gap-1">
        <SlSocialVkontakte />
        VKontakte
      </a>
      <a className="flex flex-row items-center gap-1">
        <RxInstagramLogo />
        Instagram
      </a>
    </div>
  );
}
