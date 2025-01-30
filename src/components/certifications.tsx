export function certifications() {
    const certifications = [
      "JavaScript",
      "Python",
      "React",
      "Django",
      "Node.js",
      "SQL",
      "Postgres",
      "Github",
      "Git",
      "REST APIs",
      "Google Project Management",
      "Quickbooks Online",
      "Intuit Bookkeeping",
      "Xero",
    ];
  
  
    return (
      <section className="py-20 px-4 bg-secondary/20 animate-fadeIn" id="skills">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
         Certifications
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {certifications.map((skill, index) => (
            <span key={index} className="skill-badge">
              {certifications}
            </span>
          ))}
        </div>
      </section>
    );
  }