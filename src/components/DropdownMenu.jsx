import React, { useState } from "react";
import report from "../assets/report.png";
import contact from "../assets/contact.png";
import feedback from "../assets/feedback.png";
import suggestion from "../assets/suggestion.png";
import "./DropdownMenu.css";

const DropdownMenu = ({ onSelect, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (form) => {
    onSelect(form);
    toggleMenu(); // Close the menu when a menu item is clicked
    closeMenu=true; // Close the menu when a menu item is clicked
  };

  return (
    <div className={`dropdown-menu ${isOpen ? false : true}`}>
      <button className="menu-item" onClick={() => handleSelect("issue")}>
        <span>Report an Issue</span> <img src={report} alt="report an issue" />
      </button>
      <button className="menu-item" onClick={() => handleSelect("share")}>
        <span>Share Feedback</span> <img src={feedback} alt="share feedback" />
      </button>
      <button className="menu-item" onClick={() => handleSelect("suggestion")}>
        <span>Give Suggestion</span> <img src={suggestion} alt="give suggestion" />
      </button>
      <button className="menu-item" onClick={() => handleSelect("contact")}>
        <span>Contact Us</span> <img src={contact} alt="contact us" />
      </button>
    </div>
  );
};

export default DropdownMenu;
