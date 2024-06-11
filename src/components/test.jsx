import React, { useState } from "react";
import "./FloatingActionButton.css";
import floatClosed from "../assets/floatClosed.png"; // Adjust the import path as needed
import closeIcon from "../assets/close.png"; // Import the close icon
import DropdownMenu from "./DropdownMenu";
import IssueForm from "./float/IssueForm";
import Share from "./float/Share";
import Suggestion from "./float/Suggestion";
import Contactus from "./float/Contactus";
import issueIcon from "../assets/report.png";
import feedbackIcon from "../assets/feedback.png";
import suggestionIcon from "../assets/suggestion.png";
import contactIcon from "../assets/contact.png";

const FloatingActionButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (selectedForm) setSelectedForm(null);
  };

  const handleSelect = (form) => {
    setSelectedForm(form);
    setMenuOpen(false); // Close the menu when a form is selected
  };

  const closeForm = () => {
    setSelectedForm(null);
    setMenuOpen(false); // Close the menu and reset selection
  };

  return (
    <div className="floating-action-button-container">
      {menuOpen && !selectedForm && <DropdownMenu onSelect={handleSelect} />}
      {selectedForm && (
        <div className="selected-form-icons">
          <img src={issueIcon} alt="Report an Issue" onClick={() => handleSelect("issue")} />
          <img src={feedbackIcon} alt="Share Feedback" onClick={() => handleSelect("share")} />
          <img src={suggestionIcon} alt="Give Suggestion" onClick={() => handleSelect("suggestion")} />
          <img src={contactIcon} alt="Contact Us" onClick={() => handleSelect("contact")} />
        </div>
      )}
      <div className="floating-action-button">
        <img src={menuOpen || selectedForm ? closeIcon : floatClosed} alt="FAB" onClick={toggleMenu} />
      </div>
      {selectedForm === "issue" && <IssueForm onClose={closeForm} />}
      {selectedForm === "share" && <Share onClose={closeForm} />}
      {selectedForm === "suggestion" && <Suggestion onClose={closeForm} />}
      {selectedForm === "contact" && <Contactus onClose={closeForm} />}
    </div>
  );
};

export default FloatingActionButton;
