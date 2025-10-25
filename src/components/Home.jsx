import React, { useState, useEffect } from "react";

export default function Home() {
  const texts = ["Web Developer", "MERN Stack Developer", "Data Analyst"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length); 
        setFade(true); 
      }, 500);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>
            Hi, I'm <span className="highlight">Santhiya</span>
          </h1>

          <h2
            key={index}
            style={{
              opacity: fade ? 1 : 0,
              transition: "opacity 0.2s ease-in-out",
              minHeight: "2rem", 
            }}
          >
            {texts[index]}
          </h2>

          <h4>B.E - Computer Science and Engineering</h4>
          <br />
          <a href="#home" className="btn">View Resume</a>
        </div>

        <div className="home-image">
          <img src="https://via.placeholder.com/250" />
        </div>
      </div>
    </section>
  );
}
