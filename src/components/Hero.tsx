import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
        Meet Nyasha
      </h1>
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
        Your Creative Software Developer
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        I build exceptional and accessible Full Stack Websites, AI Agents, Automations for your business that save you time because time is money!.
      </p>
      <div className="flex gap-4 mb-8">
        <Button variant="outline" size="lg" asChild>
          <a href="https://github.com/nyashaushe" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
        </Button>
        <Button size="lg" asChild>
          <a href="mailto:mrshepard18@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </a>
        </Button>
      </div>
      <SocialLinks />
    </section>
  );
}
