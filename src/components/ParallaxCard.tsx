"use client";
import Image from "next/image";

export default function Card({
  title,
  description,
  src,
  link,
  color,
  i,
}: {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  i: number;
}) {
  return (
    <div className="sticky top-[16rem] flex h-[100vh] items-start justify-center md:h-[50vh]">
      <div
        className="relative flex min-h-96 w-full origin-top flex-col rounded-3xl p-12"
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="m-0 text-center text-3xl">{title}</h2>

        <div className="mt-12 flex h-full gap-12">
          <div className="relative top-[10%] w-2/5">
            <p className="text-lg [&::first-letter]:text-3xl">{description}</p>

            <span className="flex items-center gap-2">
              <a
                href={link}
                target="_blank"
                className="cursor-pointer text-xs underline"
              >
                See more
              </a>

              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative h-full w-3/5 overflow-hidden rounded-3xl">
            <div className="h-full w-full">
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
