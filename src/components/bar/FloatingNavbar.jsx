import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import './FloatingNavbar.css';

const FloatingNavbar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`floating-navbar ${isOpen ? 'open' : ''}`}>
      <button className="floating-navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className="button"> <FaBeer /> </i>
      </button>
      <div className="floating-navbar-items">
        {items.map(item => (
          <a key={item.id} href={item.link} className="floating-navbar-item">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingNavbar;