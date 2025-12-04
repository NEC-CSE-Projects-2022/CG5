import React from 'react';
import { Leaf } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Project' },
    { id: 'objective', label: 'Objective' },
    { id: 'procedure', label: 'Procedure' },
    { id: 'validation', label: 'Validation' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={(e) => {e.preventDefault(); setActiveSection('home');}}>
          <Leaf size={28} />
          Grape Leaf Disease Detection
        </a>
        
        <div className="navbar-nav-container">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;