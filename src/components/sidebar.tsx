import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="sidebar-wrapper">
      <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <h2>Cipher</h2>
        <ul>
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li>
            Projects
            <ul>
              <li><NavLink to="/cybersec">Cyber Security Projects</NavLink></li>
              <li><NavLink to="/softwaredev">Software Development Projects</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/journal">Journal</NavLink></li>
          <li><NavLink to="/resume">My Resume</NavLink></li>
        </ul>
      </div>

      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '←' : '→'}
      </button>
    </div>
  );
}

export default Sidebar;