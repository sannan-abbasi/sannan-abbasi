import "../styles/hero.css";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        
        <div className="hero-content">
          <p className="hero-tag">AVAILABLE FOR FREELANCE</p>
          <h1>Sannan</h1>
          
          <h2>
            Frontend Developer building fast web apps and browser extensions that deliver real value.
          </h2>

          <p className="hero-desc">
            I’m a frontend developer focused on building 
            scalable web apps and browser extensions.
          </p>

          <div className="hero-buttons">
            <a href="#project" className="primary">
              View Projects
            </a>
            <a href="#contact" className="secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-frame">
            {/* This div below handles the spark/glow effect */}
            <div className="glow-ring"></div>
            <img src={profile} alt="Sannan" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;