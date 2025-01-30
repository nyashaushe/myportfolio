import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Blog } from "@/components/Blog";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
<<<<<<< HEAD
    <main className="min-h-screen relative bg-background">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-overlay pointer-events-none" />
      
      <div className="relative z-10">
        <ThemeToggle />
        <Hero />
        <Introduction />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
=======
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
>>>>>>> 3a5889b88f136186f2e6c33ececb4dcac5e6ae02
    </main>
  );
};

export default Index;