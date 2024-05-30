"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import Magnet from "~/components/ui/Magnet";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "~/components/ui/sonner";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <Toaster />
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default function ContactPage() {
  return (
    <div className="z-10 flex h-screen flex-col">
      <div className="container mx-auto px-10 py-20 md:px-20 ">
        <div className="flex flex-row">
          <div className="flex basis-2/3 flex-col">
            <p className="ml-2 py-6 text-5xl">Давайте поработаем</p>
            <InputForm/>
          </div>
          <div className="flex basis-1/3 flex-col">
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
            <div className="ml-2">
              <p className="mt-5 text-lg uppercase text-white/50">
                Связаться со мной
              </p>
              <Magnet pull={0.1}>
                <p className="text-lg text-white">n.a.grebnev.work@gmail.com</p>
              </Magnet>
              <Magnet pull={0.1}>
                <p className="text-lg text-white">+7 (995) 857-84-00</p>
              </Magnet>
              <p className="mt-5 text-lg uppercase text-white/50">Моя работа</p>
              <Magnet pull={0.1}>
                <p className="text-lg text-white">GitHub</p>
              </Magnet>
              <Magnet pull={0.1}>
                <p className="text-lg text-white">LinkedIn</p>
              </Magnet>
              <Magnet pull={0.1}>
                <p className="text-lg text-white">Vercel</p>
              </Magnet>
              <p className="mt-5 text-lg uppercase text-white/50">
                Мои социальные сети
              </p>
              <Magnet pull={0.1}>
                <p className="text-lg text-white">Telegram</p>
              </Magnet>
              <Magnet pull={0.1}>
                <p className="text-lg text-white">VKontakte</p>
              </Magnet>
              <Magnet pull={0.1}>
                <p className="text-lg text-white">Instagram</p>
              </Magnet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
