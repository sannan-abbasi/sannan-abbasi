import "../styles/about.css"

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left">
          <h2>About Me</h2>
          <p>
            I’m a frontend developer focused on building fast, clean, and scalable web applications.
            I specialize in React and browser extension development, turning ideas into real working products.
          </p>

          <p>
            I enjoy solving real world problems through code, especially automation tools,
            productivity apps, and data driven web solutions.
          </p>

          <div className="about-stats">
            <div>
              <h3>100+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3>3+</h3>
              <p>Years Learning</p>
            </div>
            <div>
              <h3>Freelance</h3>
              <p>Available</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>What I do</h3>
            <ul>
              <li>Frontend Development (React)</li>
              <li>Chrome Extensions</li>
              <li>UI/UX Implementation</li>
              <li>API Integration</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About