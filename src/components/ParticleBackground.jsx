// import { useEffect, useState, useMemo } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim"; 

// const ParticleBackground = () => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const options = useMemo(
//     () => ({
//       fpsLimit: 60, // 60 is plenty; 120 causes lag on backgrounds
//       interactivity: {
//         events: {
//           onHover: { 
//             enable: true, 
//             mode: "grab" // 'grab' looks better for "lines" than repulse
//           },
//         },
//         modes: {
//           grab: { 
//             distance: 200, 
//             links: { opacity: 0.5 } 
//           },
//         },
//       },
//       particles: {
//         color: { value: "#ffffff" },
//         links: {
//           color: "#ffffff",
//           distance: 150,
//           enable: true,
//           opacity: 0.2, // Low opacity prevents "visual clutter" and lag
//           width: 1,
//         },
//         move: {
//           enable: true,
//           speed: 1.2, // Smooth, slow movement feels more premium
//           direction: "none",
//           outModes: { default: "out" },
//         },
//         number: {
//           density: { 
//             enable: true, 
//             area: 1000 // Spreads particles out so there aren't too many in one spot
//           },
//           value: 70, // Sweet spot for performance
//         },
//         opacity: {
//           value: { min: 0.1, max: 0.4 },
//         },
//         shape: { type: "circle" },
//         size: { value: { min: 1, max: 2.5 } },
//       },
//       detectRetina: false, // STOPS LAG: Prevents drawing 4x pixels on high-res screens
//       pauseOnBlur: true,   // Saves battery/CPU when the tab isn't active
//     }),
//     []
//   );

//   if (init) {
//     return (
//       <Particles
//         id="tsparticles"
//         options={options}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: -1,
//           pointerEvents: "none",
//         }}
//       />
//     );
//   }

//   return null;
// };

// export default ParticleBackground;
import { useEffect, useRef } from "react";

const ProBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      // Lower number (60) prevents lag while still looking full
      particles = [];
      const particleCount = Math.min(60, (canvas.width * canvas.height) / 20000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            // Lines get thinner as they move away
            ctx.strokeStyle = `rgba(56, 189, 248, ${1 - distance / 150})`; 
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", () => {
      resize();
      init();
    });

    resize();
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "#08090b", // Matches your professional dark theme
        pointerEvents: "none",
      }}
    />
  );
};

export default ProBackground;