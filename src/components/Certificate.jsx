import React from "react";
import { FaBriefcase, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    
    <section className="certification-section" id="certificate">
      <h2 className="cert-title">Certificates</h2>
      <div className="cert-stats">
        
        <Link to="/internships" className="cert-card">
          <FaBriefcase className="cert-icon" />
          <h3>2</h3>
          <p>Internships</p>
        </Link>

        <Link to="/workshops" className="cert-card">
          <FaChalkboardTeacher className="cert-icon" />
          <h3>9</h3>
          <p>Workshops</p>
        </Link>

        <Link to="/certifications" className="cert-card">
          <FaCertificate className="cert-icon" />
          <h3>12</h3>
          <p>Certification Courses</p>
        </Link>

        <Link to="/achievements" className="cert-card">
          <GrAchievement className="cert-icon" />
          <h3>6</h3>
          <p>Achievements</p>
        </Link>

      </div>
    </section>
    
  );
};

export default Certificates;
