import React from "react";
import "../../styles/CategoryList.css";

export default function CategoryList({
  categories,
  onSelectCategory,
  selectedCategory,
}) {
  if (!categories || categories.length === 0)
    return <p className="category-empty">No categories found.</p>;

  return (
    <div className="category-container">
      <h3 className="category-title">🛍️ Categories</h3>

      <div className="category-scroll">
        {categories.map((category, index) => {
          const isActive = selectedCategory?.name === category.name;
          return (
            <button
              key={index}
              onClick={() => onSelectCategory(category)}
              className={`category-chip ${isActive ? "active" : ""}`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
