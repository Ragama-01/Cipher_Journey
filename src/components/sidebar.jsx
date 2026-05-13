import { useState } from 'react';
import '../index.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="sidebar-wrapper">

      <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <h2>Cipher</h2>
        <ul>
          <li>Dashboard</li>
          <li>Projects</li>
          <li>Journal</li>
          <li>Skills</li>
        </ul>
      </div>

      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '←' : '→'}
      </button>

    </div>
  );
}

export default Sidebar;