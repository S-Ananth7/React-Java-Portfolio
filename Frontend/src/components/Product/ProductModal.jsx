import React from "react";
import "../../styles/ProductCard.css";

export default function ProductCard({ product, onAddToCart, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      {}
      <img
        src={product.image || "/Images/placeholder.png"}
        alt={product.name}
        className="product-img"
      />

      {}
      <h3 className="product-name">
        {product.name.length > 25
          ? product.name.slice(0, 25) + "..."
          : product.name}
      </h3>

      {}
      <p className="product-price">${product.price.toFixed(2)}</p>

      {}
      <p className="product-desc">
        {product.description
          ? product.description.slice(0, 60) + "..."
          : "High-quality product carefully selected for you."}
      </p>

      {}
      <button
        className="add-cart-btn"
        onClick={(e) => {
          e.stopPropagation(); 
          onAddToCart(product);
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}
