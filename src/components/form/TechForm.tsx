"use client";
import {
  type Tech,
  createTechnology,
  updateTechnology,
} from "~/server/db/queries";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ColorPicker } from "~/components/ui/ColorPicker";

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Хотя бы пару символов, пожалуйста",
    })
    .max(256, { message: "Не больше 256 символов, пожалуйста" }),
  link: z
    .string()
    .min(2, {
      message: "Хотя бы пару символов, пожалуйста",
    })
    .max(256, { message: "Не больше 256 символов, пожалуйста" }),
  code: z
    .string()
    .max(4096, { message: "Не больше 4096 символов, пожалуйста" }),
  desc: z
    .string()
    .min(2, {
      message: "Хотя бы пару символов, пожалуйста",
    })
    .max(4096, { message: "Не больше 4096 символов, пожалуйста" }),
  color: z.string().max(16, { message: "Не больше 16 символов, пожалуйста" }),
});

export default function TechForm({
  tech,
  onSuccess,
}: {
  tech?: Tech;
  onSuccess?: () => void;
}) {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: tech?.name ?? "",
      link: tech?.link ?? "",
      code: tech?.code ?? "",
      desc: tech?.desc ?? "",
      color: tech?.color ?? "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    if (!tech)
      createTechnology(data)
        .then(() => {
          toast("Технология успешно добавлена");
          if (onSuccess) onSuccess();
          router.refresh();
          form.reset();
        })
        .catch((e) => {
          console.log(e);
          toast("Ошибка добавления технологии");
        });
    else
      updateTechnology(Number(tech.id), data)
        .then(() => {
          toast("Технология успешно обновлена");
          if (onSuccess) onSuccess();
          router.refresh();
          form.reset();
        })
        .catch((e) => {
          console.log(e);
          toast("Ошибка обновления технологии");
        });
  }

  return (
    <Form {...form}>
      <Toaster />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-default grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-3 md:col-span-1">
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Название технологии"
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
          name="link"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Ссылка</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ссылка на сайт"
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
          name="color"
          render={() => (
            <FormItem className="col-span-1">
              <FormLabel>Цвет</FormLabel>
              <ColorPicker
                className="w-full truncate bg-transparent"
                background={form.watch("color")}
                setBackground={(background) => {
                  form.setValue("color", background);
                  console.log(form.getValues());
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea
                  autoComplete="off"
                  placeholder="Описание технологии"
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
          name="code"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Код</FormLabel>
              <FormControl>
                <Textarea
                  autoComplete="off"
                  placeholder="Код для демонстрации"
                  className="border-b-1 rounded-none border-x-0 border-t-0 border-b-slate-300 bg-transparent focus:rounded-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="outline"
          type="submit"
          className="col-span-3 bg-transparent"
        >
          Отправить
        </Button>
      </form>
    </Form>
  );
}
