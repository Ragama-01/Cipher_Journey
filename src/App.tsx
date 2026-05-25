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

const footerLinks = [
  { label: "About", href: "/" },
  { label: "Cyber Security", href: "/cybersec" },
  { label: "Software Dev", href: "/softwaredev" },
  { label: "Journal", href: "/journal" },
  { label: "Resume", href: "/resume" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Ragama-01",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anne-ragama-2a31aa253/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ragamaannea@gmail.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

function PortfolioFooter() {
  return (
    <footer className="portfolio-footer">
      <div className="pf-top">
        {/* Brand */}
        <div className="pf-brand">
          <span className="pf-prompt">{'>'}_ </span>
          <span className="pf-name">ANNA RAGAMA</span>
          <p className="pf-tagline">
            Implementation & Support Specialist · CS Graduate · Nairobi, Kenya
          </p>
        </div>

        {/* Nav links */}
        <nav className="pf-nav" aria-label="Footer navigation">
          <p className="pf-section-label">// navigate</p>
          <ul className="pf-nav-list">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="pf-nav-link">
                  <span className="pf-arrow">→</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact / Socials */}
        <div className="pf-contact">
          <p className="pf-section-label">// connect</p>
          <p className="pf-contact-item">+2547-4180-3715</p>
          <p className="pf-contact-item">Nairobi, Kenya</p>
          <p className="pf-contact-item">ragamaannea@gmail.com</p>
          <div className="pf-socials">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="pf-social-btn"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pf-bottom">
        <span className="pf-copy">
          &copy; {new Date().getFullYear()} Anna Ragama — Built with React & TypeScript
        </span>
        
      </div>
    </footer>
  );
}

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
          <img src="/images/profile.jpeg" alt="Profile" className="profile-img" />
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <h2 className="headers">My Projects</h2>
      <section className="nav-cards">
        <div className="nav-card" onClick={() => navigate('/cybersec')}>
          <h3>Cyber Security Projects</h3>
          <p>CTF writeups, tools, and security research</p>
          <span className="nav-card-arrow">→</span>
        </div>
        <div className="nav-card" onClick={() => navigate('/softwaredev')}>
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

      <section className="contact-section" />

      {/* ── FOOTER ── */}
      <PortfolioFooter />
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
