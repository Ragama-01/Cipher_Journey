import '../index.css';

const projects = [

  {
    title: "Currency Converter",
    description: "A real-time currency converter built with JavaScript and a Node.js backend, supporting multiple currencies.",
    tags: ["JavaScript", "Node.js", "API"],
    github: "https://github.com/annaRagama",
    demo: "https://your-demo-link.com",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
  },
  {
    title: "Payroll Reporting System",
    description: "PostgreSQL-based payroll reporting system with complex CASE logic and interrelated views for enterprise use.",
    tags: ["PostgreSQL", "SQL", "Oracle"],
    github: "https://github.com/annaRagama",
    demo: "https://your-demo-link.com",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
  },
  {
    title: "WhatsApp Business Automation",
    description: "Automated WhatsApp business workflows for Kenyan SMEs using Make/n8n and the WhatsApp Business API.",
    tags: ["n8n", "Automation", "API"],
    github: "https://github.com/annaRagama",
    demo: "https://your-demo-link.com",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=200&fit=crop",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="headers">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="card-image"
            />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="card-footer">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-btn">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="card-btn card-btn--demo">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}