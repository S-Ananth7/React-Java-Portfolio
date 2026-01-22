import React, { useState } from "react";
import "../../styles/SortOptions.css";

export default function SortOptions({ onSort }) {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onSort(value);
  };

  return (
    <div className="sort-container">
      <label htmlFor="sort" className="sort-label">
        Sort by:
      </label>
      <select
        id="sort"
        value={selected}
        onChange={handleChange}
        className="sort-select"
      >
        <option value="">-- Select --</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="nameAZ">Name: A → Z</option>
        <option value="nameZA">Name: Z → A</option>
      </select>
    </div>
  );
}
