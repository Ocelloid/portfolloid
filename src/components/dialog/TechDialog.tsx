"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useState } from "react";
import TechForm from "~/components/form/TechForm";
import { type Tech } from "~/server/db/queries";
import { FaPencilAlt } from "react-icons/fa";

export default function TechDialog({ data }: { data: Tech }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <FaPencilAlt />
      </DialogTrigger>
      <DialogContent className="max-w-5xl bg-slate-900/90 text-white">
        <DialogHeader>
          <DialogTitle>
            Редактировать технологию &quot;{data.name}&quot;
          </DialogTitle>
          <DialogDescription>
            <TechForm tech={data} onSuccess={() => setOpen(false)} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
