import React from "react";
import "./styles/ContactPage.css"; 

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! 💌");
  };

  return (
    <div className="contact-container">
      {}
      <div className="overlay" />

      {}
      <div className="contact-card">
        <h2>📞 Contact Us</h2>
        <p>Have questions or feedback? We’d love to hear from you!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
