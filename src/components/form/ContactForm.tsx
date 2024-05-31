import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import Magnet from "~/components/ui/Magnet";

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
    .max(4096, { message: "Не больше 4096 символов, пожалуйста" })
    .optional(),
  message: z
    .string()
    .max(4096, { message: "Не больше 4096 символов, пожалуйста" })
    .min(1, { message: "Это обязательное поле" }),
});

export default function ContactForm() {
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
        className="text-default flex flex-col gap-2 space-y-6 md:w-2/3"
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
