import React from "react";


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-column">
          <div className="skill">
            <span>HTML 5, CSS</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
            <span className="percentage">80%</span>
          </div>

          <div className="skill">
            <span>JAVASCRIPT</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
            <span className="percentage">50%</span>
          </div>

          <div className="skill">
            <span>React</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
            <span className="percentage">70%</span>
          </div>

          <div className="skill">
            <span>MongoDB</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
            <span className="percentage">50%</span>
          </div>

          <div className="skill">
            <span>JAVASCRIPT</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
            <span className="percentage">50%</span>
          </div>
        </div>

        <div className="skills-column">

            <div className="skill">
            <span>C</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
            <span className="percentage">80%</span>
          </div>

             <div className="skill">
            <span>PYTHON</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "60%" }}></div>
            </div>
            <span className="percentage">60%</span>
          </div>

          <div className="skill">
            <span>MYSQL</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
            <span className="percentage">50%</span>
          </div>

          <div className="skill">
            <span>COMMUNICATION</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
            <span className="percentage">80%</span>
          </div>

          <div className="skill">
            <span>CREATIVITY</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
            <span className="percentage">80%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
