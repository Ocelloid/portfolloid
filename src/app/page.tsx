import Hero from "~/app/components/Hero";
import Stack from "~/app/components/Stack";
import Description from "~/app/components/Description";
import Gallery from "~/app/components/Gallery";
import Contact from "~/app/components/Contact";
import Footer from "~/app/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Description />
      <Stack />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
