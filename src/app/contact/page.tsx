"use client";
import Image from "next/image";
import Magnet from "~/components/ui/Magnet";
import ContactForm from "~/components/form/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto p-4 md:p-20 ">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 flex flex-col">
            <p className="ml-2 py-6 text-5xl">Давайте поработаем</p>
            <ContactForm />
          </div>
          <div className="col-span-1 mt-6 grid grid-cols-3 content-start md:mt-0 md:grid-cols-1">
            <div className="relative col-span-1 h-24 w-24 overflow-hidden rounded-full">
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
            <div className="col-span-2 ml-2">
              <p className="mt-5 text-lg uppercase text-white/50">
                Связаться со мной
              </p>
              <Magnet pull={0.1}>
                <div>
                  <a
                    href="mailto:ocelloid@gmail.com"
                    target="_blank"
                    className="text-lg text-white"
                  >
                    ocelloid@gmail.com
                  </a>
                </div>
              </Magnet>
              <Magnet pull={0.1}>
                <div>
                  <a
                    href={`tel:+79958578004`}
                    target="_blank"
                    className="text-lg text-white"
                  >
                    +7 (995) 857-80-04
                  </a>
                </div>
              </Magnet>
            </div>
            <div className="col-span-1 ml-2">
              <p className="mt-5 text-lg uppercase text-white/50">Работа</p>
              <Magnet pull={0.1}>
                <div>
                  <a
                    href="https://github.com/ocelloid/"
                    target="_blank"
                    className="text-lg text-white"
                  >
                    GitHub
                  </a>
                </div>
              </Magnet>
              <Magnet pull={0.1}>
                <div>
                  <a
                    href="https://www.linkedin.com/in/nikita-grebnev-b9a2a413b/"
                    target="_blank"
                    className="text-lg text-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </Magnet>
              <Magnet pull={0.1}>
                <div>
                  <a
                    href="https://vercel.com/ocelloids-projects"
                    target="_blank"
                    className="text-lg text-white"
                  >
                    Vercel
                  </a>
                </div>
              </Magnet>
              <Magnet pull={0.1}>
                <div>
              <a
                href="https://career.habr.com/ocelloid"
                target="_blank"
                className="text-lg text-white"
              >
                Habr
              </a>
                  </div>
                </Magnet>
            </div>
            <div className="col-span-2 ml-2">
              <p className="mt-5 text-lg uppercase text-white/50">
                Социальные сети
              </p>
              <Magnet pull={0.1}>
                <div>
                  <a
                    href="https://t.me/ocelloid"
                    target="_blank"
                    className="text-lg text-white"
                  >
                    Telegram
                  </a>
                </div>
              </Magnet>
              <Magnet pull={0.1}>
                <div>
                  <a
                    href="https://vk.com/ocelloid"
                    target="_blank"
                    className="text-lg text-white"
                  >
                    ВКонтакте
                  </a>
                </div>
              </Magnet>
              <Magnet pull={0.1}>
                <div>
                  <a
                    href="https://www.instagram.com/lateral_move"
                    target="_blank"
                    className="text-lg text-white"
                  >
                    Instagram
                  </a>
                </div>
              </Magnet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
