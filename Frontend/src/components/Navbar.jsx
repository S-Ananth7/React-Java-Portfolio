
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";
import { Menu, X, ShoppingCart, User, LogIn, LogOut } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    closeMenu();
  };

  return (
    <nav className="navbar">
      {}
      <div className="nav-left" onClick={() => navigate("/")}>
        <span className="logo-icon">🛍️</span>
        <h1 className="logo-text">E-Cart</h1>
      </div>

      {}
      <div className="mobile-toggle" onClick={toggleMenu}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {}
      <div className={`nav-center ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/products" className="nav-link" onClick={closeMenu}>Products</Link>
        <Link to="/orders" className="nav-link" onClick={closeMenu}>Orders</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>

        {}
        <div className="mobile-auth">
          {user ? (
            <button
              onClick={handleLogout}
              className="nav-link mobile-logout"
              style={{ background: 'none', border: 'none', fontSize: '1rem', cursor: 'pointer' }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="nav-link" onClick={closeMenu}>Login</Link>
          )}
        </div>
      </div>

      {}
      <div className="nav-right">
        {user ? (
          <div className="user-dropdown">
            <Link to="/profile" className="nav-link user-link">
              <User size={20} />
              <span>{user.name?.split(" ")[0]}</span>
            </Link>
            <button onClick={handleLogout} className="logout-btn" title="Logout">
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <Link to="/login" className="nav-link login-link">
            <LogIn size={20} />
            <span>Login</span>
          </Link>
        )}

        <Link to="/cart" className="cart-link" onClick={closeMenu}>
          <ShoppingCart size={22} className="cart-icon" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
