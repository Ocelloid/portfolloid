"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import Magnet from "~/components/ui/Magnet";
import { sendInquiry } from "~/server/db/queries";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "~/components/ui/sonner";
import { Textarea } from "~/components/ui/textarea";

const FormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Хотя бы пару символов, пожалуйста",
    })
    .max(256, { message: "Не больше 256 символов, пожалуйста" }),
  email: z
    .string()
    .min(1, { message: "Это обязательное поле" })
    .email("Некорректный формат электронной почты")
    .max(256, { message: "Не больше 256 символов, пожалуйста" }),
  organization: z
    .string()
    .max(256, { message: "Не больше 256 символов, пожалуйста" })
    .optional(),
  services: z
    .string()
    .max(1024, { message: "Не больше 1024 символов, пожалуйста" })
    .optional(),
  message: z
    .string()
    .max(1024, { message: "Не больше 1024 символов, пожалуйста" })
    .min(1, { message: "Это обязательное поле" }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      organization: "",
      services: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    sendInquiry(data)
      .then(() => {
        toast("Ваше сообщение отправлено");
        form.reset();
      })
      .catch((e) => {
        console.log(e);
        toast("Ошибка отправки сообщения");
      });
  }

  return (
    <Form {...form}>
      <Toaster />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-default flex flex-col gap-2 space-y-6 md:w-2/3 md:gap-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Как вас зовут?</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Ваше имя"
                  {...field}
                  className="border-b-1 rounded-none border-x-0 border-t-0 border-b-slate-300 bg-transparent focus:rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Какой у вас адрес электронной почты?</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ваша почта"
                  {...field}
                  className="border-b-1 rounded-none border-x-0 border-t-0 border-b-slate-300 bg-transparent focus:rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Как называется ваша организация?</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Ваша организация"
                  {...field}
                  className="border-b-1 rounded-none border-x-0 border-t-0 border-b-slate-300 bg-transparent focus:rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="services"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Какие услуги вас интересуют?</FormLabel>
              <FormControl>
                <Textarea
                  autoComplete="off"
                  placeholder="Дизайн, разработка, тестирование..."
                  className="border-b-1 rounded-none border-x-0 border-t-0 border-b-slate-300 bg-transparent focus:rounded-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Что вы хотите добавить?</FormLabel>
              <FormControl>
                <Textarea
                  autoComplete="off"
                  placeholder="Никита, я хочу..."
                  className="border-b-1 rounded-none border-x-0 border-t-0 border-b-slate-300 bg-transparent focus:rounded-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Magnet>
          <Button type="submit">Отправить</Button>
        </Magnet>
      </form>
    </Form>
  );
}

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
                    href="mailto:n.a.grebnev.work@gmail.com"
                    target="_blank"
                    className="text-lg text-white"
                  >
                    n.a.grebnev.work@gmail.com
                  </a>
                </div>
              </Magnet>
              <Magnet pull={0.1}>
                <div>
                  <a
                    href={`tel:+79958578400`}
                    target="_blank"
                    className="text-lg text-white"
                  >
                    +7 (995) 857-84-00
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
