import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./styles/AuthPage.css"; 

export default function SignUpPage() {
  const { signup, error, isLoading } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    
    const success = await signup(fullName, email, password);
    if (success) {
      alert("Account created successfully!");
      navigate("/"); 
    }
  };

  return (
    <div className="auth-container">
      {}
      <div className="overlay" />

      {}
      <div className="auth-card">
        <h2>Create Your Account ✨</h2>
        <p>
          Join <strong>E-Shop</strong> and start shopping smarter!
        </p>

        {error && <p className="error-msg" style={{ color: 'red' }}>{String(error)}</p>}

        <form onSubmit={handleSignup} className="auth-form">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mb-20"
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "creating..." : "Sign Up"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
