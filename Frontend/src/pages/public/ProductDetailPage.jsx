import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import axios from "../../api/axiosConfig";
import "./styles/ProductDetailPage.css";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error("❌ Error loading product:", err))
      .finally(() => setLoading(false));
  }, [id]);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert("✅ Added to cart!");
    navigate("/cart");
  };

  if (loading) return <p className="loading-text">Loading...</p>;
  if (!product) return <p className="loading-text">Product not found.</p>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        {}
        <div className="image-carousel">
          <img
            src={product.images?.[activeIndex] || product.image}
            alt={product.name}
            className="carousel-img"
          />

          {product.images && product.images.length > 1 && (
            <>
              <button className="arrow-btn left" onClick={handlePrev}>
                ‹
              </button>
              <button className="arrow-btn right" onClick={handleNext}>
                ›
              </button>
            </>
          )}
        </div>

        {}
        <h2 className="product-detail-name">{product.name}</h2>
        <p className="product-detail-price">${product.price.toFixed(2)}</p>
        <p className="product-detail-desc">
          {product.description ||
            "This is a premium quality product carefully selected for you."}
        </p>

        <div className="action-buttons">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart 🛒
          </button>
          <button
            className="buy-now-btn"
            onClick={() => navigate("/checkout", { state: { directBuy: product } })}
          >
            Buy Now
          </button>
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Products
        </button>
      </div>
    </div>
  );
}
