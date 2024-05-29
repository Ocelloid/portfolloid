import Image from "next/image";
import RoundedButton from "~/app/components/ui/RoundedButton";

export default function Contact() {
  return (
    <div className="relative flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-7xl pt-48">
        <div className="relative mx-4 border-b border-white/10">
          <span className="mb-4 flex items-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full">
              <Image
                fill={true}
                alt={"image"}
                src={`/images/favicon.png`}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <p className="ml-2 text-2xl">Давайте поработаем вместе</p>
          </span>
          <RoundedButton className="absolute right-4 top-[50%] flex w-28 cursor-pointer items-center justify-center rounded-full bg-slate-950/50 px-4 py-8 text-white outline-none outline outline-2  outline-offset-2 hover:outline-blue-500 md:right-40">
            <p className="relative z-[2] m-0 text-center font-semibold">
              Написать мне
            </p>
          </RoundedButton>
        </div>
        <div className="m-12 flex gap-5">
          <RoundedButton className="flex h-0 cursor-pointer items-center justify-center rounded-3xl bg-slate-950/50 px-4 py-11 text-white outline-none outline outline-2  outline-offset-2 hover:outline-blue-500 md:right-40">
            <p>n.a.grebnev.work@gmail.com</p>
          </RoundedButton>
          <RoundedButton className="flex h-0 cursor-pointer items-center justify-center rounded-3xl bg-slate-950/50 px-4 py-11 text-white outline-none outline outline-2  outline-offset-2 hover:outline-blue-500 md:right-40">
            <p>+7 (995) 857-84-00</p>
          </RoundedButton>
        </div>
      </div>
    </div>
  );
}