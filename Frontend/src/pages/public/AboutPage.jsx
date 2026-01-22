import React from "react";
import "./styles/AboutPage.css"; 
import { useCart } from "../../context/CartContext";


export default function AboutPage() {
  return (
    <div className="about-container">
      {}
      <div className="overlay" />

      {}
      <div className="about-card">
        <h2>About E-Shop 🛒</h2>

        <p>
          Welcome to <strong>E-Shop</strong>, your one-stop destination for
          quality products, unbeatable prices, and a delightful shopping
          experience. Whether you're exploring the latest gadgets, trendy
          clothing, or daily groceries — we make shopping smart and simple.
        </p>

        <p>
          Our mission is to bring convenience and joy to your everyday life.
          We’re a passionate team working to create an easy, secure, and
          rewarding experience for every shopper. 💛
        </p>

        <div className="button-container">
          <button onClick={() => (window.location.href = "/contact")}>
            📞 Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
