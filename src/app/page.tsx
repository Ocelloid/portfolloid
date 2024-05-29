import Hero from "~/app/components/Hero";
import Stack from "~/app/components/Stack";
import Description from "~/app/components/Description";

export default function HomePage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-gradient-to-b from-slate-700 to-slate-950 text-white">
      <Hero />
      <Description />
      <Stack />
    </main>
  );
}
