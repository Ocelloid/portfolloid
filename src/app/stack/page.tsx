"use client";
import { type Tech, getTechnologies } from "~/server/db/queries";
import TechForm from "~/components/form/TechForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import TechCard from "~/components/TechCard";
import { Input } from "~/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Loading from "~/components/ui/Loading";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useUser } from "@clerk/nextjs";

function Search({
  val,
  onChange,
}: {
  val: string;
  onChange: (e: string) => void;
}) {
  const searchParams = useSearchParams();

  const handleSearchChange = useCallback(
    (s: string) => {
      onChange(s);
    },
    [onChange],
  );

  useLayoutEffect(() => {
    handleSearchChange(searchParams.get("s") ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative ml-auto flex-1 md:grow-0">
      <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4" />
      <Input
        type="search"
        placeholder="Поиск"
        value={val}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="border-b-1 mt-2 rounded-none border-x-0 border-t-0 border-b-slate-300 bg-transparent pl-8 focus:rounded-lg"
      />
    </div>
  );
}

export default function Stack() {
  const { user } = useUser();
  const [search, setSearch] = useState("");
  const [stack, setStack] = useState<Tech[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTechnologies();
      setStack(data);
      setLoading(false);
    };
    void fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto w-full px-8 py-4 md:p-20">
        <h1 className="text-4xl font-bold">Технологии</h1>
        <p className="mt-4 text-lg">
          Языки, фреймворки, библиотеки и инструменты, которые я использую в
          проектах.
        </p>
        <Suspense>
          <Search val={search} onChange={(e) => setSearch(e)} />
        </Suspense>

        {user?.id === "user_2hO3y89tdym40T8WxVzfGn2Q06h" && (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Добавить технологию</AccordionTrigger>
              <AccordionContent className="px-1">
                <TechForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        <div className="mt-4 columns-1 gap-6 lg:columns-2 2xl:columns-3">
          {loading && <Loading />}
          {stack
            .filter((x: Tech) =>
              !!search
                ? x.name
                    ?.toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                : true,
            )
            .map((data, index) => {
              return <TechCard tech={data} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
