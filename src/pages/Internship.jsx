import React from "react";
import i1 from "../assets/i1.jpg"
import i2 from "../assets/i2.jpg"

export default function InternshipPage() {
  return (
    <div className="page-container">
      <h2 style={{marginTop:"2rem"}}>Internships</h2>
      
        <div className="intern-container">
            <img src={i1} style={{  height:"70vh",width: "300px", borderRadius: "8px",  marginLeft:"2rem",marginTop:"1rem" }}/>
            <img src={i2} style={{ height: "70vh",width: "300px", borderRadius: "8px",  marginLeft:"2rem", marginTop:"1rem" }}/>
        </div>
    </div>
  );
}
