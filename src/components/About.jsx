import React from "react";
import { MdEmail,MdPhone } from "react-icons/md";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p style={{textAlign:"justify"}}>
          I'm a passionate Full-Stack Developer who loves transforming 
          complex problems into elegant digital experiences. I blend
           clean design with powerful functionality to build solutions 
           that truly make an impact.
           I aspire to create impactful digital experiences and grow
           as a full-stack and data-driven professional
           With hands-on experience in React, Node.js, MongoDB, 
           and Data Analysis, I’ve completed several projects that 
           showcase my ability to combine design, functionality, and performance.
        </p>
        <br/>
        <div
      style={{
        display: "flex",
        gap: "150px",           // space between email and phone
        flexWrap: "wrap",      // wrap on smaller screens
        justifyContent: "flex-start",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "1rem",
          color: "#080606ff",
          
        }}
      >
       <MdEmail /> Santhiyakanniyappan<br/>2004@gmail.com
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          fontSize: "1rem",
          color: "#0a0606ff",
        }}
      >
       <MdPhone /> +91 936 318 7749 
      </div>
    </div>
        
      </div>
     
    </section>
  );
}
