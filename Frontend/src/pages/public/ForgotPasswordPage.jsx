import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axiosConfig";
import "./styles/AuthPage.css";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");

        try {
            
            await axios.post("/auth/forgot-password", { email });
            setMessage("If an account exists, a reset link has been sent to your email.");
        } catch (err) {
            
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="overlay" />
            <div className="auth-card">
                <h2>Reset Password 🔒</h2>
                <p>Enter your email to receive a reset link.</p>

                {message && <p className="success-msg" style={{ color: 'green' }}>{message}</p>}
                {error && <p className="error-msg" style={{ color: 'red' }}>{error}</p>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>

                <p className="auth-footer">
                    Remembered it?{" "}
                    <Link to="/login" className="auth-link">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
