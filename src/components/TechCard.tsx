"use client";
import TechDialog from "~/components/dialog/TechDialog";
import { type Tech, deleteTechnology } from "~/server/db/queries";
import Code from "~/components/Code";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function TechCard({ tech }: { tech: Tech }) {
  const router = useRouter();
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
    <div
      className={`mb-4 flex break-inside-avoid flex-col rounded-2xl p-4 duration-300 hover:brightness-150`}
      style={{ backgroundColor: tech.color + "80" }}
    >
      <div className="flex flex-row">
        <p className="text-lg">
          <span className="font-bold">{tech.name}</span>
        </p>
        <button
          className="ml-auto mr-2"
          onClick={() => handleTechDelete(Number(tech.id))}
        >
          <FaTrash className="text-red-500" />
        </button>
        <TechDialog data={tech} />
      </div>
      {!!tech.code && <Code language="js">{tech.code}</Code>}
      <p className="mt-2 text-lg">{tech.desc}</p>
    </div>
  );
}
