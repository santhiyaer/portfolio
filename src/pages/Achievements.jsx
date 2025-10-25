import React from "react";
import  a1 from "../assets/a1.jpg";
import  a2 from "../assets/a2.jpg";
import  a3 from "../assets/a3.jpg";
import  a4 from "../assets/a4.jpg";
import  a5 from "../assets/a5.jpg";
import  a6 from "../assets/a6.jpg";


export default function WorkshopsPage() {
  return (
    <div className="page-container">
      <br/>
      <h2 style={{textAlign:"center"}}>Achievements</h2>
      <div className="intern-container">
                  <img src={a1} style={{  height:"70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={a2} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={a3} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={a4} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={a5} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={a6} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  
              </div>
    </div>
  );
}
