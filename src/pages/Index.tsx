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

const Index = () => {
  return (
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
    </main>
  );
};

export default Index;