import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
        Full Stack Developer
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        I build exceptional and accessible digital experiences for the web.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" size="lg">
          <Github className="mr-2 h-5 w-5" />
          GitHub
        </Button>
        <Button size="lg">
          <Mail className="mr-2 h-5 w-5" />
          Contact Me
        </Button>
      </div>
    </section>
  );
}