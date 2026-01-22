
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/AdminNav.css";

export default function AdminNav() {
  const { logout } = useAuth();
  const location = useLocation();

  const links = [
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/products", label: "Products" },
    { path: "/admin/users", label: "Users" },
    { path: "/admin/orders", label: "Orders" },
  ];

  return (
    <nav className="admin-nav">
      <div className="admin-logo">
        ⚙️ <span>E-Shop Admin</span>
      </div>

      <div className="admin-links">
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`admin-link ${
              location.pathname === path ? "active" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      <button className="admin-logout" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}
