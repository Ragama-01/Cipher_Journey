import '../index.css'

const projects = [
  {
    title: "Network Scanner Tool",
    description: "A Python-based network scanning tool that identifies open ports, active hosts, and potential vulnerabilities on a network.",
    tags: ["Python", "Cybersecurity", "Networking"],
    github: "https://github.com/annaRagama",
    demo: "https://your-demo-link.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
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