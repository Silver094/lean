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
        {icon}
      </button>
      {isOpen && <div className="fab-menu">{children}</div>}
    </div>
  );
};

export default FloatingActionButton;
