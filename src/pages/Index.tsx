import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Introduction />
      <div className="py-8 text-center">
        <Link to="/piano-portfolio">
          <Button variant="outline" size="lg">
            View Piano Portfolio
          </Button>
        </Link>
      </div>
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;