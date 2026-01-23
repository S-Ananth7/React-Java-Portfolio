import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import shoppingAnimation from "../../Animations/Shopping.json";
import "./styles/HomePage.css";

export default function HomePage() {
  const navigate = useNavigate(); 
  const trends = ["⚡ Flash Picks", "🌿 New Arrivals", "🛍️ Curated Finds"];

  return (
    <div className="home-container">
      {}
      <div className="overlay" />

      {}
      <div className="hero">
        <h1>
          🛍️ Welcome to{" "}
          <span className="brand-highlight">E-Cart</span>
        </h1>

        <p>
          Discover hand-picked products, latest trends, and exclusive deals —
          all in one place. Shop smarter. Live better.
        </p>

        <button
          className="shop-btn"
          onClick={() => navigate("/products")}
        >
          🛒 Shop Now
        </button>
      </div>

      {}
      <div className="animation-box">
        <Lottie animationData={shoppingAnimation} loop={true} />
      </div>

      {}
      <div className="trend-badges">
        {trends.map((text, i) => (
          <span key={i} className="badge">
            {text}
          </span>
        ))}
      </div>

      {}
      <p className="tagline">
        Trusted by thousands of happy shoppers across the country 💙
      </p>
    </div>
  );
}
