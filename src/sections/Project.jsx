import { useState } from "react"
import "../styles/project.css"

function Project() {
  const [selectedImg, setSelectedImg] = useState(null)

  const project = [
    {
      title: "Amazon Analyzer",
      desc: "A Chrome extension that analyzes Amazon products, pricing trends, and competition to help sellers make data-driven decisions.",
      img: "amazon.png",
      tags: ["Chrome Extension", "Data Mining"]
    },
    {
      title: "LinkedIn Profile Extractor + AI Messaging",
      desc: "Automates lead generation, reducing manual data entry by 90% using AI-driven messaging.",
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
      desc: "Executes strategy-based trades with a 2-second settlement check to ensure accurate profit/loss monitoring.",
      img: "trading.png",
      tags: ["Trading API", "Automation"]
    }
  ]

  return (
    <section className="projects" id="project">
      <h2 className="projects-title">Selected Works <span>/ Projects</span></h2>

      <div className="project-grid">
        {project.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="img-container" onClick={() => setSelectedImg(p.img)}>
               <img src={p.img} alt={p.title} />
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

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImg} alt="preview" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}

export default Project