import { useState } from 'react';
import "../styles/FAQ.css";

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in Frontend Development using React.js and modern CSS. I also have deep expertise in building Chrome Extensions and web automation tools."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary. A custom browser extension might take 1-2 weeks, while a full portfolio or web app can take 2-4 weeks depending on the complexity."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, I provide a support period after every project to ensure everything is running smoothly and to fix any unexpected bugs."
  },
  {
    question: "How do we get started?",
    answer: "You can reach out via the contact form or email. We'll hop on a quick call or chat to discuss your requirements and project goals."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              {/* Changed logic to a single icon that rotates via CSS */}
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;