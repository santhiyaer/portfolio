import React from "react";
import Button from 'react-bootstrap/Button';


export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>I’m developing a personal portfolio website using
               React.js with Vite to showcase my projects, skills, 
               and achievements. The site is designed for fast performance,
                modern UI, and smooth user experience.
            </p>
           <Button
            variant="outline-light"
            onClick={() => window.location.href = ""}>View Project</Button>
          </div>
          <div className="project-card">
            <h3>Smart-Ration</h3>
            <p>An IoT-based system that uses automated sensors 
              to provide real-time stock updates and notify elderly
               beneficiaries. It ensures timely access to essential items 
               while improving accuracy, efficiency, and communication
               in ration distribution.
            </p>
            <Button
            variant="primary"
            size="sm"  
            onClick={() => window.location.href = "https://github.com/santhiyaer/smart-ration.git"}>View Project</Button>
          </div>
          <div className="project-card">
            <h3>Rural Youth Career Guidance Website</h3>
            <p>A passionate and resourceful rural youth focused on 
              developing a Career Guidance platform to support job
               opportunities. Dedicated to learning, growing, and making
                a positive impact in a growth-oriented environment.
            </p>
             <Button
            variant="primary"
            size="sm"  
            onClick={() => window.location.href = "https://github.com/santhiyaer/Rural-youth-career-guidance.git"}>View Project</Button> 
          </div>

          <div className="project-card">
            <h3>Multi-Modal CNN based Stroke Detection from CT images and Clinical Data</h3>
            <p>This research integrates CT images and clinical data
               to improve stroke detection accuracy beyond traditional 
               CNN-based models. It combines CNN-extracted features
               with ML algorithms like LR, RF, LGBM, and MLP using key
                variables such as Blood Pressure, Glucose Level, and Age.
            </p>
           <Button
            variant="primary"
            size="sm"  
            onClick={() => window.location.href = "https://github.com/santhiyaer/Brain-stroke.git"}>View Project</Button>
          </div>

        </div>
      </div>
    </section>
  );
}
