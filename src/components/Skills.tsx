export function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "REST APIs",
    "GraphQL",
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20 animate-fadeIn" id="skills">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}