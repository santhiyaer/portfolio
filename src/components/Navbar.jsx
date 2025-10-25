import React, { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";

const sections = [
  { id: "home", label: "Home", icon: <IoMdHome /> },
  { id: "about", label: "About", icon: <BsFillPersonFill /> },
  { id: "education", label: "Education", icon:  <IoSchool /> },
  { id: "skills", label: "Skills", icon: <FaLaptopCode/>  },
  { id: "projects", label: "Projects", icon: <FaFolderOpen/> },
  { id: "certificate", label: "Certificate", icon: <PiCertificateFill /> },
  { id: "contact", label: "Contact", icon: <FaPhoneAlt/> },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        root: null,
        rootMargin:"-50% 0px -50% 0px",
        threshold:0
       } 
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Santhiya K</h2>
        <br />
        <p>WEB DEVELOPER</p>
      </div>
      <nav className="nav-links">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`nav-item ${activeSection === section.id ? "active" : ""}`}
          >
            <span className="icon">{section.icon}</span>
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
