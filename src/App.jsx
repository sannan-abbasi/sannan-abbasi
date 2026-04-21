
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Project';
import Contact from './sections/Contact';
import FAQ from './components/FAQ';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* The Custom Cursor */}
      <div 
        className="custom-cursor" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }} 
      />
      
      <div className="noise"></div>
      <ParticleBackground />
      <Navbar />

      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="project"><Project /></section>
      <section id="contact"><Contact /></section>
      <section id="faq"><FAQ/></section>
    </>
  )
}

export default App;