import React from "react";

export default function SubcategoryList({
  subcategories,
  onSelectSubcategory,
  selectedSubNames,
}) {
  if (!subcategories || subcategories.length === 0) {
    return (
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: "14px", color: "#6b7280" }}>
          No subcategories available.
        </p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "10px",
          borderTop: "1px solid #e5e7eb",
          paddingTop: "15px",
        }}
      >
        Subcategories
      </h3>

      {subcategories.map((subcategory) => {
        const isSelected = selectedSubNames.includes(subcategory.name);
        return (
          <label
            key={subcategory.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "6px",
              cursor: "pointer",
              backgroundColor: isSelected ? "#e0e7ff" : "transparent",
              padding: "8px 10px",
              borderRadius: "8px",
              transition: "background-color 0.2s",
            }}
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onSelectSubcategory(subcategory)}
            />
            {subcategory.name}
          </label>
        );
      })}
    </div>
  );
} 