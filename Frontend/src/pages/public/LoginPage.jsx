import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./styles/AuthPage.css"; 

export default function LoginPage() {
  const { login, error, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/"); 
    }
  };

  return (
    <div className="auth-container">
      <div className="overlay" />

      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p>
          Login to continue shopping with <strong>E-Shop</strong>
        </p>

        {error && <p className="error-msg" style={{ color: 'red' }}>{String(error)}</p>}

        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div style={{ textAlign: "right", margin: "10px 0" }}>
            <Link to="/forgot-password" style={{ fontSize: "0.9rem", color: "#666" }}>
              Forgot Password?
            </Link>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/signup" className="auth-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
