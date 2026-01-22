import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function OrderTrackPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#f0f9ff",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ color: "#1e3a8a" }}>🚚 Tracking Order #{id}</h2>
      <p style={{ marginTop: "20px", color: "#374151" }}>
        Your order is currently being processed.  
        It will be shipped within 1–2 days.
      </p>

      <button
        onClick={() => navigate("/orders")}
        style={{
          marginTop: "30px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        ← Back to Orders
      </button>
    </div>
  );
}
