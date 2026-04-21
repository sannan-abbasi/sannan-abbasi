import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT SIDE: THE PRO LOGO */}
      <div className="logo-section">
        <a href="#home" className="navbar-logo">
          <div className="logo-icon-wrapper">
            <img src="/SannanSparkLogo.svg" alt="Sannan Spark" className="logo-symbol" />
          </div>
          <span className="logo-text">SANNAN</span>
        </a>
      </div>

      {/* RIGHT SIDE: LINKS */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li>
        <a href="#faq">FAQ</a>
        </li>
        <li><a href="#contact" className="nav-contact-btn">Contact</a></li>
        
      </ul>
    </nav>
  )
}

export default Navbar