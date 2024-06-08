import React from 'react';
import './DropdownMenu.css';
import report from '../assets/report.png'
import contact from '../assets/contact.png'
import feedback from '../assets/feedback.png'
import suggestion from '../assets/suggestion.png'
function DropdownMenu(){
  return (
    <div className="dropdown-menu"> 
      <button className="menu-item">
        <span>Report an Issue </span>  <img src={report}  alt="report an user" />
      </button>
      <button className="menu-item">
       <span>Share Feedback</span> <img src={feedback} alt="share feedback" />
      </button>
      <button className="menu-item">
       <span>Give Suggestion</span> <img src={suggestion} alt="give suggestion" />
      </button>
      <button className="menu-item">
       <span>Contact Us</span> <img src={contact} alt="contact us" />
      </button>
    </div>
  );
};

export default DropdownMenu;
