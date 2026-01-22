import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ProductCard.css";

const ProductCard = ({ product, onAddToCart, onViewProduct }) => {
  const handleClick = (e) => {
    
    if (onViewProduct) {
      e.preventDefault();
      onViewProduct(product);
    }
  };

  return (
    <div className="product-card">
      {}
      <Link to={`/product/${product.id}`} onClick={handleClick} className="product-link">
        <div className="image-wrapper">
          <img
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price?.toFixed(2)}</p>
        </div>
      </Link>

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
};

export default ProductCard;
