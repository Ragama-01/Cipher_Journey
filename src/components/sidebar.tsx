import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const navItems = [
  { label: 'Dashboard', to: '/', icon: '⌂' },
  { label: 'Cyber Security', to: '/cybersec', icon: '🔐', parent: 'Projects' },
  { label: 'Software Dev', to: '/softwaredev', icon: '💻', parent: 'Projects' },
  { label: 'Journal', to: '/journal', icon: '📓' },
  { label: 'My Resume', to: '/resume', icon: '📄' },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const topItems = navItems.filter(item => !item.parent);
  const projectItems = navItems.filter(item => item.parent === 'Projects');

  return (
    <div className="sidebar-wrapper">
      <div className={`sidebar ${isOpen ? '' : 'closed'}`}>

        {/* Logo */}
        <div className="sidebar-logo">
          <span className="sidebar-logo-bracket">[</span>
          CIPHER
          <span className="sidebar-logo-bracket">]</span>
        </div>

        <div className="sidebar-divider" />

        <nav className="sidebar-nav">

          {/* Dashboard */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'sidebar-item--active' : ''}`
            }
          >
            <span className="sidebar-item-icon">⌂</span>
            <span className="sidebar-item-label">Dashboard</span>
          </NavLink>

          {/* Projects dropdown */}
          <div
            className="sidebar-item sidebar-item--parent"
            onClick={() => setProjectsOpen(!projectsOpen)}
          >
            <span className="sidebar-item-icon">{'</>'}</span>
            <span className="sidebar-item-label">Projects</span>
            <span className="sidebar-chevron">{projectsOpen ? '▾' : '▸'}</span>
          </div>

          {projectsOpen && (
            <div className="sidebar-subnav">
              {projectItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `sidebar-subitem ${isActive ? 'sidebar-item--active' : ''}`
                  }
                >
                  <span className="sidebar-subitem-dash">—</span>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}

          {/* Other items */}
          {topItems.slice(1).map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? 'sidebar-item--active' : ''}`
              }
            >
              <span className="sidebar-item-icon">{item.icon}</span>
              <span className="sidebar-item-label">{item.label}</span>
            </NavLink>
          ))}

        </nav>

        {/* Bottom status */}
        {/* <div className="sidebar-footer">
          <span className="sidebar-status-dot" />
          <span>ONLINE</span>
        </div> */}

      </div>

      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '←' : '→'}
      </button>
    </div>
  );
}

export default Sidebar;