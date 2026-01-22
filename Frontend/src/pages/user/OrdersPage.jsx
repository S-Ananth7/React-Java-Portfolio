import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Inter, sans-serif" }}>
      <h2 style={{ color: "#1e3a8a", marginBottom: "20px" }}>My Orders</h2>

      {orders.length ? (
        orders.map((o) => (
          <div
            key={o.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <p>🆔 Order ID: <b>{o.id}</b></p>
            <p>📅 Date: {o.date}</p>
            <p>💰 Total: ${o.total.toFixed(2)}</p>

            <button
              onClick={() => navigate(`/orders/track/${o.id}`)}
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Track Order →
            </button>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}
