import Hero from "@/components/Hero";
import Contact from "./contact/page";
import Quote from "./quote/page";
import About from "./about/page";

export default function Home() {
  return (
    <main className="relative px-6 sm:px-12">
      <Hero />
      <Quote />
      <About />
      <Contact />
    </main>
  );
}
