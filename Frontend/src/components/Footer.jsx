import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {}
      <div className="footer-social">
        <a
          href="https://www.facebook.com/"
          className="footer-icon"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://twitter.com/"
          className="footer-icon"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.instagram.com/"
          className="footer-icon"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/"
          className="footer-icon"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {}
      <div className="footer-divider"></div>

      {}
      <p className="footer-text">
        © {year} <span className="brand-name">E-Shop</span>. All rights reserved.
      </p>

      <p className="footer-subtext">
        Thoughtfully coded and beautifully designed — made with <strong>React</strong> 💙
      </p>
    </footer>
  );
}
