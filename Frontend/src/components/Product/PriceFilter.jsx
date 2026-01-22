import React, { useState } from "react";
import "../../styles/PriceFilter.css";

export default function PriceFilter({ onFilter }) {
  const [selectedRanges, setSelectedRanges] = useState([]);

  const ranges = [
    { label: "Under $50", value: [0, 50] },
    { label: "$50 - $100", value: [50, 100] },
    { label: "$100 - $200", value: [100, 200] },
    { label: "Above $200", value: [200, Infinity] },
  ];

  const handleToggle = (rangeValue) => {
    const alreadySelected = selectedRanges.some(
      (r) => r[0] === rangeValue[0] && r[1] === rangeValue[1]
    );

    let updated;
    if (alreadySelected) {
      updated = selectedRanges.filter(
        (r) => !(r[0] === rangeValue[0] && r[1] === rangeValue[1])
      );
    } else {
      updated = [...selectedRanges, rangeValue];
    }

    setSelectedRanges(updated);
    onFilter(updated);
  };

  const clearFilters = () => {
    setSelectedRanges([]);
    onFilter([]);
  };

  return (
    <div className="price-filter">
      <span className="filter-title">💰 Price</span>
      <div className="filter-options">
        {ranges.map((range) => {
          const isActive = selectedRanges.some(
            (r) => r[0] === range.value[0] && r[1] === range.value[1]
          );
          return (
            <button
              key={range.label}
              className={`price-chip ${isActive ? "active" : ""}`}
              onClick={() => handleToggle(range.value)}
            >
              {range.label}
            </button>
          );
        })}
      </div>

      {selectedRanges.length > 0 && (
        <button className="clear-btn" onClick={clearFilters}>
          Clear
        </button>
      )}
    </div>
  );
}
