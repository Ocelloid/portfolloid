"use client";
import Image from "next/image";
import RoundedButton from "~/components/ui/RoundedButton";
import { useRouter, usePathname } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <div className="relative flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-7xl pt-6">
        <div className="relative mx-4 border-b border-white/10">
          <span className="mb-4 flex items-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full">
              <Image
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={"image"}
                src={`/images/favicon.png`}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <p className="ml-2 text-2xl">Давайте поработаем</p>
          </span>
          <RoundedButton
            onClick={() => {
              void router.push("/contact");
            }}
            className="absolute right-4 top-[50%] flex w-28 cursor-pointer items-center justify-center rounded-full bg-slate-950/75 px-4 py-8 text-white outline-none outline outline-2  outline-offset-2 hover:outline-blue-500 md:right-40"
          >
            <p className="relative z-[2] m-0 text-center font-semibold">
              Написать мне
            </p>
          </RoundedButton>
        </div>
        <div className="m-12 flex flex-col gap-5 pt-4 md:flex-row">
          <RoundedButton
            onClick={() => (window.location.href = "mailto:ocelloid@gmail.com")}
            className="flex h-0 cursor-pointer items-center justify-center rounded-3xl bg-slate-950/50 px-4 py-6 text-white outline-none outline outline-2  outline-offset-2 hover:outline-blue-500 md:right-40"
          >
            <p className="relative z-[2] m-0 text-center font-semibold">
              ocelloid@gmail.com
            </p>
          </RoundedButton>
          <RoundedButton
            onClick={() => (window.location.href = "tel:+79958578004")}
            className="flex h-0 cursor-pointer items-center justify-center rounded-3xl bg-slate-950/50 px-4 py-6 text-white outline-none outline outline-2  outline-offset-2 hover:outline-blue-500 md:right-40"
          >
            <p className="relative z-[2] m-0 text-center font-semibold">
              +7 (995) 857-84-00
            </p>
          </RoundedButton>
        </div>
      </div>
    </div>
  );
}
