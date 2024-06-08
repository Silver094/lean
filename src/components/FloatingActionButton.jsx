import React, { useState } from "react";
import "./FloatingActionButton.css";
import cross from "../assets/cross.png";
import floatClosed from "../assets/floatClosed.png";

function FloatingActionButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(floatClosed);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setImageSrc((prevImageSrc) =>
      prevImageSrc === floatClosed ? cross : floatClosed
    );
  };

  return (
    <div className="fab-container">
      <button className="fab-button" id="fab" onClick={toggleMenu}>
        <img src={imageSrc} alt="help" />
      </button>
      {isOpen && <div className="fab-menu">{children}</div>}
    </div>
  );
}

export default FloatingActionButton;
