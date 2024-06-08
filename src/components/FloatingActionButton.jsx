import React, { useState } from 'react';
import './FloatingActionButton.css';

function FloatingActionButton ({ icon, children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fab-container">
      <button className="fab-button" onClick={toggleMenu}>
        <img src={icon} alt="help" />
      </button>
      {isOpen && <div className="fab-menu">{children}</div>}
    </div>
  );
};

export default FloatingActionButton;
