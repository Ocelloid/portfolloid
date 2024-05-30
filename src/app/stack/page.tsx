import { getTechnologies } from "~/server/db/queries";
import TechForm from "~/components/form/TechForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import TechCard from "~/components/TechCard";

export default async function Stack() {
  const stack = await getTechnologies();

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto w-full px-8 py-4 md:p-20">
        <h1 className="text-4xl font-bold">Технологии</h1>
        <p className="mt-4 text-lg">
          Языки, фреймворки, библиотеки и инструменты, которые я использую в
          проектах.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Добавить технологию</AccordionTrigger>
            <AccordionContent className="px-1">
              <TechForm />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-4 columns-1 gap-6 lg:columns-2 2xl:columns-3">
          {stack.map((data, index) => {
            return <TechCard tech={data} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
