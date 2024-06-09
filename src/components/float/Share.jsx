 // src/Share.js
import React, { useState } from "react";
import "./Share.css";

const Share = () => {
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
      <form className="Share" onSubmit={handleSubmit}>
      <h2>Let us know your <span style={{fontWeight:"bolder"}}> Feedback</span> about us!</h2>

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
        <div style={{display:"flex",marginTop:"10px"}}>
        <input type="checkbox" name="" id="" /> Send feedback anonymously
        </div>
        <div className="email">
        Enter your email to receive an update
        <input type="email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Share;
