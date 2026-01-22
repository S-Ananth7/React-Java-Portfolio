import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/OrderSuccessPage.css";

export default function OrderSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const orderId = location.state?.orderId || Math.floor(Math.random() * 100000);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/orders");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✅</div>
        <h2 className="success-title">Order Placed Successfully!</h2>
        <p className="success-subtitle">
          Thank you for your purchase. Your items are being prepared.
        </p>

        <div className="order-details">
          <p><strong>Order ID:</strong> #{orderId}</p>
          <p><strong>Estimated Delivery:</strong> 3–5 business days</p>
        </div>

        <button className="track-btn" onClick={() => navigate(`/orders/track/${orderId}`)}>
          🚚 Track Order
        </button>

        <p className="redirect-msg">
          Redirecting to your orders page shortly...
        </p>
      </div>
      <div className="confetti" />
    </div>
  );
}
