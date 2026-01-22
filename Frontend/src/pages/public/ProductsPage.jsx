import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axiosConfig";
import "./styles/ProductsPage.css";

export default function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubs, setSelectedSubs] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("az");

  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  
  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSubcategories(cat.subCategories || cat.subcategories || []);
    setSelectedSubs([]);
    setProducts([]);
  };

  
  const handleSubToggle = async (sub) => {
    const isSelected = selectedSubs.includes(sub.id);
    const updated = isSelected
      ? selectedSubs.filter((id) => id !== sub.id)
      : [...selectedSubs, sub.id];
    setSelectedSubs(updated);
    setLoading(true);

    if (updated.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    let combined = [];
    for (let id of updated) {
      try {
        const res = await axios.get(`/products/subcategory/${id}`);
        
        if (Array.isArray(res.data)) {
          combined.push(...res.data);
        }
      } catch (err) {
        console.error(`Error fetching products for subcategory ${id}:`, err);
      }
    }

    setProducts(combined);
    setLoading(false);
  };

  
  useEffect(() => {
    let updated = [...products];

    if (searchQuery.trim()) {
      updated = updated.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortOption) {
      case "az":
        updated.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        updated.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-high":
        updated.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        updated.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(updated);
  }, [products, searchQuery, sortOption]);

  
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find((item) => item.id === product.id);
    const updatedCart = existingItem
      ? existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      : [...existingCart, { ...product, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("✅ Added to cart!");
  };

  return (
    <div className="page-container">
      {}
      <div className="searchbar-wrapper">
        <div className="searchbar-container">
          <form
            className="searchbar-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <span className="searchbar-icon">🔍</span>
            <input
              type="text"
              placeholder="Find what you need. Discover what you love."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button">Search</button>
          </form>
        </div>
      </div>

      {}
      <div className="main-layout">
        {}
        <aside className="sidebar">
          <h2>Product Catalog</h2>

          <h3>Categories</h3>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`category-item ${selectedCategory?.id === cat.id ? "active" : ""
                }`}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat.name}
            </div>
          ))}

          {selectedCategory && (
            <>
              <h3>Subcategories</h3>
              {subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className={`subcategory-box ${selectedSubs.includes(sub.name) ? "active" : ""
                    }`}
                  onClick={() => handleSubToggle(sub)}
                >
                  {sub.name} {selectedSubs.includes(sub.name) ? "➖" : "➕"}
                </div>
              ))}
            </>
          )}
        </aside>

        {}
        <section className="content">
          {}
          <div className="top-bar">
            <div className="sort-container">
              <label>Sort by:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="az">Name: A–Z</option>
                <option value="za">Name: Z–A</option>
                <option value="low-high">Price: Low → High</option>
                <option value="high-low">Price: High → Low</option>
              </select>
            </div>
          </div>

          {loading ? (
            <p>Loading products...</p>
          ) : filteredProducts.length ? (
            <div className="product-grid">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="product-card"
                  onClick={() =>
                    navigate(`/product/${p.id}`, { state: { product: p } })
                  }
                >
                  <img src={p.image} alt={p.name} />
                  <h4>{p.name}</h4>
                  <p className="price">${p.price.toFixed(2)}</p>
                  <button
                    className="add-cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(p);
                    }}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: "center", marginTop: "30px" }}>
              No products found.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
