import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import "../../styles/ProductList.css";

export default function ProductList({ products = [], onAddToCart }) {
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return (
      <p className="product-empty">
        No products found matching the criteria.
      </p>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() =>
            navigate(`/product/${product.id}`, { state: { product } })
          }
        >
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
}
