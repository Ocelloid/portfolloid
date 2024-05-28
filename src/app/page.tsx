import Hero from "~/app/components/Hero";
import Stack from "~/app/components/Stack";
export default function HomePage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-gradient-to-b from-slate-700 to-slate-950 text-white">
      <Hero />
      <Stack />
    </main>
  );
}
