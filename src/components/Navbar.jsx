import "../styles/navbar.css"

function Navbar() {
  // Get the base URL from Vite (e.g., /sannan-abbasi/)
  const base = import.meta.env.BASE_URL;

  return (
    <nav className="navbar">
      {/* LEFT SIDE: THE PRO LOGO */}
      <div className="logo-section">
        <a href="#home" className="navbar-logo">
          <div className="logo-icon-wrapper">
            <img 
              /* Combines base path + filename and ensures no double slashes */
              src={`${base}/SannanSparkLogo.svg`.replace('//', '/')} 
              alt="Sannan Spark" 
              className="logo-symbol" 
            />
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