import { useState } from "react"
import "../styles/project.css"

function Project() {
  const [selectedImg, setSelectedImg] = useState(null)
  const base = import.meta.env.BASE_URL;

  const project = [
    {
      title: "Amazon Analyzer",
      desc: "A Chrome extension that analyzes Amazon products, pricing trends, and competition to help sellers make data-driven decisions.",
      img: "amazon.png",
      tags: ["Chrome Extension", "Data Mining"]
    },
    {
      title: "LinkedIn Profile Extractor + AI Messaging",
      desc: "Extract LinkedIn profiles and generate personalized AI-powered outreach messages for networking and clients.",
      img: "linkedin.png",
      tags: ["AI", "Automation", "React"]
    },
    {
      title: "YouTube Video Manager",
      desc: "A tool to save, organize, and delete YouTube videos efficiently with a clean UI.",
      img: "youtube.png",
      tags: ["UI/UX", "Management"]
    },
    {
      title: "Trading Automation System",
      desc: "An automated trading assistant where users set amount and time, and the system executes strategy-based trading logic.",
      img: "trading.png",
      tags: ["Trading API", "Automation"]
    }
  ]

  // Helper to format path correctly
  const getPath = (imgName) => `${base}/${imgName}`.replace('//', '/');

  return (
    <section className="projects" id="project">
      <h2 className="projects-title">Selected Works <span>/ Projects</span></h2>

      <div className="project-grid">
        {project.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="img-container" onClick={() => setSelectedImg(getPath(p.img))}>
              <img
                src={getPath(p.img)}
                alt={p.title}
                className="project-img"
              />
              <div className="img-overlay">Click to Enlarge</div>
            </div>
            
            <div className="project-info">
              <div className="project-tags">
                {p.tags.map((tag, index) => <span key={index}>{tag}</span>)}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content">
            <img src={selectedImg} alt="Enlarged view" />
            <span className="close-btn">&times;</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default Project