function Projects() {
  return (
    <section id="projects">
      <h2 style={{ textAlign: "center" }}>Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Tic-Tac-Toe Web Application</h3>
          <p>Interactive game using JavaScript.</p>
          <a href="https://github.com/samruddhi621/SCT_AUG25_3" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Stopwatch Application</h3>
          <p>Responsive stopwatch with start/stop/reset.</p>
          <a href="https://github.com/samruddhi621/SCT_AUG25_2" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Responsive Landing Page</h3>
          <p>Modern responsive website design.</p>
          <a href="https://github.com/samruddhi621/SCT_AUG25_1" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;