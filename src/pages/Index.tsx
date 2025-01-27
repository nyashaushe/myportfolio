import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PianoPortfolio } from "@/components/PianoPortfolio";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Introduction />
      <PianoPortfolio />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;