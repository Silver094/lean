// src/Suggestion.js
import React, { useState } from "react";
import "./Suggestion.css";

const Suggestion = () => {
  const [section, setSection] = useState("Interview Questions");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ section, description, file });
  };

  return (
    <div className="main">
      <form className="Suggestion" onSubmit={handleSubmit}>
        <h2>Share your <span style={{fontWeight:"600"}}>Suggestions</span> with us for a chance to earn rewards!</h2>
        <label htmlFor="section">Choose a section</label>
        <select
          id="section"
          value={section}
          placeholder="Select"
          onChange={(e) => setSection(e.target.value)}
        >
          <option value="">Select</option>
          {/* Add more options as needed */}
        </select>
        <label htmlFor="description">Describe the suggestion in detail *</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write here..."
          required
        />
        <label htmlFor="file-upload" className="custom-file-upload">
          Attach
        </label>
        <input id="file-upload" type="file" onChange={handleFileChange} />
        <div className="email">
        Email
        <input type="email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Suggestion;
