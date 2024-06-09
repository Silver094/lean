 // src/Contactus.js
 import React, { useState } from "react";
 import "./Contactus.css";
 
 const Contactus = () => {
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
       <form className="Contactus" onSubmit={handleSubmit}>
       <h2>Let us know what <span style={{fontWeight:"bolder"}}> your queries</span> are!</h2>
       Your Name
       <input type="name" placeholder="Enter your Name" required/>
       Your Email
       <input type="email" placeholder="Enter your Email" required/>
       Your Mobile number
       <input type="name" placeholder="Enter your number" />
       What would you like to ask?
       <textarea name="" id="" placeholder="Wrie here..."></textarea>
         <button type="submit">Submit</button>
       </form>
     </div>
   );
 };
 
 export default Contactus;
 