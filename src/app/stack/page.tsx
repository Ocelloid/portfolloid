import Code from "~/components/Code";
import { getTechnologies } from "~/server/db/queries";
import TechForm from "~/components/form/TechForm";

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
        <TechForm />
        <div className="mt-4 columns-1 gap-6 lg:columns-2 2xl:columns-3">
          {stack.map((data, index) => {
            return (
              <div
                key={index}
                className={`mb-4 break-inside-avoid rounded-2xl p-4 duration-300 hover:brightness-150`}
                style={{ backgroundColor: data.color + "80" }}
              >
                <p className="text-lg">
                  <span className="font-bold">{data.name}</span>
                </p>
                {!!data.code && <Code language="js">{data.code}</Code>}
                <p className="mt-2 text-lg">{data.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
