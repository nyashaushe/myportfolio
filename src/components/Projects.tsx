import { Github, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project One",
    description: "A full-stack application built with React and Node.js",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with real-time updates",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tech: ["React", "Firebase", "Stripe", "TypeScript"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section className="py-20 px-4 animate-fadeIn" id="projects">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github}>
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.demo}>
                  <Link className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}