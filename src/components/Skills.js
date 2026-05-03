import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills">
      <h2 style={{ textAlign: "center" }}>Skills</h2>

      <div className="skills-container">
        
        <div className="skill-card">
          <FaHtml5 size={60} color="#e34c26" />
          <p>HTML</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt size={60} color="#264de4" />
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <FaJs size={60} color="#f0db4f" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <FaReact size={60} color="#61DBFB" />
          <p>React</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;