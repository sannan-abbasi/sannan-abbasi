import { useState } from "react"
import emailjs from "@emailjs/browser"
import "../styles/contact.css"

function Contact() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const whatsappNumber = "+923435339830" // change this

  // WHATSAPP
  const sendWhatsApp = () => {
    const text = `Hi, my name is ${name}. ${message}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
     setStatus("Opening WhatsApp...")
  setTimeout(() => setStatus(""), 2000)
  }

  // EMAIL (EmailJS)
  const sendEmail = () => {
    const templateParams = {
      from_name: name,
      message: message,
    }

    emailjs.send(
      "service_6mm7ah4",
      "template_l531tsq",
      templateParams,
      "Bi4Hrjhmp2nzv42b6"
    ).then(() => {
      setStatus("Email sent successfully!")
      setName("")
      setMessage("")
        setTimeout(() => setStatus(""), 3000)
    })
  }
return(
  <section className="contact" id="contact">

  <h2>Contact Me</h2>
  <p>Let’s build something amazing together</p>

  <div className="contact-wrapper">

    {/* LEFT: FORM */}
    <div className="contact-card">

      <h3>Send a Message</h3>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="btn-group">

        <button className="email-btn" onClick={sendEmail}>
          📩 Send Email
        </button>

        <button className="whatsapp-btn" onClick={sendWhatsApp}>
          💬 WhatsApp
        </button>

      </div>

    </div>


    <div className="contact-info">
  <h3>Get in Touch</h3>
  <div className="info-item">
    <span>📍 Available for freelance worldwide</span>
  </div>
  <div className="info-item">
    <span>📧 Fast response within 24 hours</span>
  </div>
  <div className="info-item">
    <span>⚡ React / Extensions / Automation</span>
  </div>
</div>
</div>
  {status && <div className="toast">{status}</div>}

</section>
)
}

export default Contact