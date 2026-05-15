import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CyberSec from './components/cyberSecProjects';
import SoftwareDev from './components/softwareDevProjects';
import Journal from './components/Journal';
import Resume from './components/Resume';
import './index.css';

const skills = [
  {
    category: "Languages & Databases",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "PostgreSQL", "MySQL", "PHP"],
  },
  {
    category: "Frameworks & Tools",
    items: ["React", "Node.js", "Django", "Oracle Forms", "BIRT", "n8n", "Make"],
  },
  {
    category: "Cybersecurity",
    items: ["OSINT", "Network Scanning", "Penetration Testing", "Active Directory", "Linux"],
  },
  {
    category: "Certifications",
    items: ["ALX Professional Foundations", "ALX AI for Software Engineering", "ALX Cyber Security", "eMobilis"],
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ── HERO ── */}
      <h2 className="headers">WELCOME TO ANNE RAGAMA'S PORTFOLIO</h2>
      <section className="intro">
        <div className="intro-text">
          <p>
            Hi, I'm Anna Ragama. I'm a Computer Science graduate and IT
            professional based in Nairobi, Kenya, currently working as an
            Implementation & Support Specialist at Software Technologies Ltd,
            where I work with Oracle tools to deliver and support enterprise
            software solutions. My background spans application support,
            software engineering, and cybersecurity.
          </p>
        </div>
        <div className="intro-image">
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <img src="./src/images/profile.jpeg" alt="Profile" className="profile-img" />
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <h2 className="headers">My Projects</h2>
      <section className="nav-cards">
        <div className="nav-card" onClick={() => navigate('/cybersec')}>
          <span className="nav-card-icon">🔐</span>
          <h3>Cyber Security Projects</h3>
          <p>CTF writeups, tools, and security research</p>
          <span className="nav-card-arrow">→</span>
        </div>
        <div className="nav-card" onClick={() => navigate('/softwaredev')}>
          <span className="nav-card-icon">💻</span>
          <h3>Software Dev Projects</h3>
          <p>Web apps, scripts, and development work</p>
          <span className="nav-card-arrow">→</span>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <h2 className="headers">Skills & Tools</h2>
      <section className="skills-section">
        {skills.map((group, i) => (
          <div className="skill-group" key={i}>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((skill, j) => (
                <span className="skill-tag" key={j}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── CONTACT ── */}
      <h2 className="headers">Contact</h2>
      <section className="contact-section">
       <p className="contact-intro">
  {'>'}_  Currently open to new opportunities — remote, hybrid, or Nairobi-based.
</p>
        <div className="contact-grid">

          <div className="contact-card">
            <span className="contact-icon">📧</span>
            <span className="contact-label">Email</span>
            <a href="mailto:ragamaannea@gmail.com" className="contact-value">
              ragamaannea@gmail.com
            </a>
          </div>

          <div className="contact-card">
  <span className="contact-icon">💼</span>
  <span className="contact-label">LinkedIn</span>
  <a
    href="https://www.linkedin.com/in/anne-ragama-2a31aa253/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-value"
  >
    https://www.linkedin.com/in/anne-ragama-2a31aa253/
  </a>
</div>

<div className="contact-card">
  <span className="contact-icon">🐙</span>
  <span className="contact-label">GitHub</span>
  <a
    href="https://github.com/Ragama-01"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-value"
  >
    github.com/Ragama-01
  </a>
</div>

<div className="contact-card">
  <span className="contact-icon">📍</span>
  <span className="contact-label">Location</span>
  <span className="contact-value">Nairobi, Kenya</span>
</div>

</div>
</section>

{/* ── FOOTER ── */}
<footer className="footer">
  <p>{'>'}_ ANNA RAGAMA &copy; {new Date().getFullYear()} — BUILT WITH REACT & TS</p>
</footer>

 </>
  );
}

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cybersec" element={<CyberSec />} />
          <Route path="/softwaredev" element={<SoftwareDev />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;