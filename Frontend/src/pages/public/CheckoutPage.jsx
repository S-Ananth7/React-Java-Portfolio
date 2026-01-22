import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/CheckoutPage.css";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(saved);
    const totalAmount = saved.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    const { name, address, city, cardNumber, expiry, cvv } = form;
    if (!name || !address || !city || !cardNumber || !expiry || !cvv) {
      alert("⚠️ Please fill all fields before proceeding!");
      return;
    }

    const newOrder = {
      id: Math.floor(Math.random() * 100000),
      date: new Date().toLocaleString(),
      items: cartItems,
      total,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));
    localStorage.removeItem("cart");

    
    setForm({
      name: "",
      address: "",
      city: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });

    navigate("/orders/success", { state: { orderId: newOrder.id } });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        {}
        <div className="summary-card">
          <h2>🧾 Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <div className="items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="item-box">
                  <img
                    src={item.image || "/Images/default.png"}
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-qty">Qty: {item.quantity}</p>
                  </div>
                  <p className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="total-row">
            <strong>Total:</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>

        {}
        <div className="form-card">
          <h2>💳 Payment Details</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            {["name", "address", "city"].map((field) => (
              <div key={field} className="form-group">
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}

            <div className="form-row">
              <div className="form-half">
                <label>Card Number</label>
                <input
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="form-half">
                <label>Expiry</label>
                <input
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                />
              </div>
            </div>

            <div className="form-group">
              <label>CVV</label>
              <input
                type="password"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                placeholder="123"
              />
            </div>

            <button className="pay-btn" onClick={handlePlaceOrder}>
              ✅ Pay & Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
