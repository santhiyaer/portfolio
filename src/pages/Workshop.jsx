import React from "react";
import  w1 from "../assets/w1.jpg";
import  w2 from "../assets/w2.jpg";
import  w3 from "../assets/w3.jpg";
import  w4 from "../assets/w4.jpg";
import  w5 from "../assets/w5.jpg";
import  w6 from "../assets/w6.jpeg";
import  w7 from "../assets/w7.jpeg";
import  w8 from "../assets/w8.jpeg";
import w9 from "../assets/w9.jpeg";

export default function WorkshopsPage() {
  return (
    <div className="page-container">
      <br/>
      <h2>Workshops, Paper Presentation & Technical Events</h2>
      <div className="intern-container">
                  <img src={w1} style={{  height:"70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={w2} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={w3} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={w4} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={w5} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={w6} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={w7} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={w8} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
                  <img src={w9} style={{ height: "70vh",width: "380px", borderRadius: "8px", marginTop:"2rem", marginLeft:"2rem" }}/>
              </div>
    </div>
  );
}
