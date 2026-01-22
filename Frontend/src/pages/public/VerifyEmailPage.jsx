import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "../../api/axiosConfig";
import "./styles/AuthPage.css"; 

export default function VerifyEmailPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get("token");

    const [status, setStatus] = useState("verifying"); 
    const [message, setMessage] = useState("Verifying your email...");

    useEffect(() => {
        if (!token) {
            setStatus("error");
            setMessage("Invalid verification link.");
            return;
        }

        const verifyToken = async () => {
            try {
                
                await axios.post(`/auth/verify-email?token=${token}`);
                setStatus("success");
                setMessage("Email verified successfully! You can now login.");
                setTimeout(() => navigate("/login"), 3000);
            } catch (err) {
                setStatus("error");
                setMessage(err.response?.data?.message || "Verification failed. Token may be expired.");
            }
        };

        verifyToken();
    }, [token, navigate]);

    return (
        <div className="auth-container">
            <div className="overlay" />
            <div className="auth-card">
                <h2>Email Verification</h2>

                {status === "verifying" && (
                    <p style={{ color: "blue" }}>{message}</p>
                )}

                {status === "success" && (
                    <div style={{ textAlign: "center" }}>
                        <p className="success-msg" style={{ color: "green", fontSize: "1.1rem" }}>{message}</p>
                        <p>Redirecting to login...</p>
                    </div>
                )}

                {status === "error" && (
                    <div style={{ textAlign: "center" }}>
                        <p className="error-msg" style={{ color: "red", fontSize: "1.1rem" }}>{message}</p>
                        <button
                            onClick={() => navigate("/login")}
                            style={{
                                marginTop: "20px",
                                padding: "10px 20px",
                                backgroundColor: "#333",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Go to Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
