"use client";

import { motion } from "framer-motion";
import TechDialog from "~/components/dialog/TechDialog";
import { type Tech, deleteTechnology } from "~/server/db/queries";
import { useUser } from "@clerk/nextjs";
// import { type Tech } from "~/server/db/queries";
import Code from "~/components/Code";
import { FaTrash, FaCog } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TechCard({ tech }: { tech: Tech }) {
  const router = useRouter();
  const { user } = useUser();
  const handleTechDelete = async (id: number) => {
    const confirmation = window.confirm(
      "Вы уверены, что хотите удалить эту технологию?",
    );
    if (confirmation) {
      await deleteTechnology(id);
      router.refresh();
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 + Number(tech.id) / 25 }}
      className="z-10"
    >
      <div
        className={`mb-4 flex break-inside-avoid flex-col rounded-2xl p-4 duration-300 hover:brightness-150`}
        style={{ backgroundColor: tech.color + "80" }}
      >
        <div className="align-center flex flex-row text-center">
          <p className="align-center flex text-lg">
            <a
              href={tech.link?.toString()}
              target="_blank"
              className="align-center flex flex-row justify-center text-center font-bold"
            >
              {!tech.icon ? (
                <FaCog className="p-1 text-3xl text-slate-300" />
              ) : (
                <Image
                  alt="tech icon"
                  src={tech.icon}
                  width={16}
                  height={16}
                  className="min-h-4 min-w-8 p-1.5"
                />
              )}
              {tech.name}
            </a>
          </p>
          {user?.id === "user_2hO3y89tdym40T8WxVzfGn2Q06h" && (
            <>
              <button
                className="ml-auto mr-2"
                onClick={() => handleTechDelete(Number(tech.id))}
              >
                <FaTrash className="text-red-500" />
              </button>
              <TechDialog data={tech} />
            </>
          )}
        </div>
        {!!tech.code && <Code language="js">{tech.code}</Code>}
        <p className="mt-2 whitespace-break-spaces text-justify text-sm">
          {tech.desc}
        </p>
      </div>
    </motion.div>
  );
}
