import React from "react";
// import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        <div className="edu-item">
          <h3>B.E. in Computer Science Engineering</h3>
          <p>Chettinad College of Engineering & Technology, Karur</p>
          <div className="edu-details">
            <span><strong>Duration:</strong> 2021 - 2025</span>
            <span><strong>Percentage:</strong> 83%</span>
          </div>
        </div>

        <div className="edu-item">
          <h3>Higher Secondary (HSC)</h3>
          <p>Bharani Park Matric Higher Secondary School, Vennaimalai</p>
          <div className="edu-details">
            <span><strong>Duration:</strong> 2019 - 2021</span>
            <span><strong>Percentage:</strong> 88%</span>
          </div>
        </div>

        <div className="edu-item">
          <h3>Secondary School (SSLC)</h3>
          <p>Vivekanandha Matric Higher Secondary School, Karur</p>
          <div className="edu-details">
            <span><strong>Duration:</strong> 2018 - 2019</span>
            <span><strong>Percentage:</strong> 84%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
