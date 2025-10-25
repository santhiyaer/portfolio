import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificate";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internship from "./pages/Internship";
import Workshop from "./pages/Workshop";
import Course from "./pages/Course";
import Achievements from "./pages/Achievements";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default function App() {
  return (
    <>
      <Router>
      <Navbar />
      <div className="main-content">
      <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Education/>
              <Skills />
              <Projects />
              <Certificates />
              <Contact />
            </>
          } />
          <Route path="/internships" element={<Internship />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/certifications" element={<Course />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}
