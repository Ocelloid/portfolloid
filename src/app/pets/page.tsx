"use client";
import { projects } from "./data";
import Card from "~/components/ParallaxCard";

export default function Pets() {
  return (
    <div className="flex flex-col">
      <div className="container sticky top-0 mx-auto p-4 md:px-20 md:pt-20">
        <h1 className="text-4xl font-bold">Проекты</h1>
        <p className="mt-4 text-lg">
          Сайты, над которыми я работаю в данный момент.
        </p>
      </div>
      <div className="container top-0 mx-auto p-4 md:px-20">
        {projects.map((project, i) => {
          return <Card key={`p_${i}`} {...project} i={i} />;
        })}
      </div>
    </div>
  );
}
