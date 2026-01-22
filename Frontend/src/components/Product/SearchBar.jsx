import React, { useState } from "react";
import "../../styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <form className="searchbar-form" onSubmit={handleSubmit}>
          <span className="searchbar-icon">🔍</span>
          <input
            type="text"
            className="searchbar-input"
            placeholder="Find what you need. Discover what you love."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="searchbar-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
