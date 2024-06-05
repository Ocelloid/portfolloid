"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { type Inquiry, getInquiries } from "~/server/db/queries";

export default function AdminPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const { user } = useUser();
  const router = useRouter();

  useLayoutEffect(() => {
    if (
      user === null ||
      (!!user?.id && user?.id !== "user_2hO3y89tdym40T8WxVzfGn2Q06h")
    ) {
      router.push("/");
    } else {
      getInquiries()
        .then((inq: Inquiry[]) => {
          setInquiries(inq);
          console.log(inq);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [router, user]);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto p-4 pb-10 md:p-20">
        <div className="flex flex-col gap-4 p-4">
          <h2 className="text-4xl font-bold">Входящие заявки</h2>
          {inquiries.map((inq) => (
            <div
              className="flex flex-col gap-2 rounded-lg bg-slate-600/75 p-4"
              key={inq.id}
            >
              <p className="text-2xl">{inq.username}</p>
              <div className="-mt-2 flex flex-row items-center gap-2 text-xs">
                <p>
                  Email:&nbsp;<a href={`mailto:${inq.email}`}>{inq.email}</a>
                </p>
                <p>Компания: {inq.organization}</p>
              </div>
              {!!inq.services && (
                <p className="text-justify">Услуги: {inq.services}</p>
              )}
              {!!inq.message && (
                <p className="text-justify">Сообщение: {inq.message}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
