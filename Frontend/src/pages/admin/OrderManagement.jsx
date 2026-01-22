import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import { theme } from "../../components/Theme";

export default function OrderManagement() {
  const [orders, setOrders] = useState([
    { id: 1001, customer: "John Doe", total: 99.99, status: "Pending" },
    { id: 1002, customer: "Jane Smith", total: 149.99, status: "Delivered" },
  ]);

  const updateStatus = (id, status) =>
    setOrders(orders.map((o) => (o.id === id ? { ...o, status } : o)));

  return (
    <AdminLayout>
      <h2 style={styles.title}>📦 Order Management</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Order ID</th><th>Customer</th><th>Total</th><th>Status</th><th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>${o.total.toFixed(2)}</td>
              <td style={{ color: o.status === "Delivered" ? "green" : theme.accent }}>
                {o.status}
              </td>
              <td>
                <select
                  value={o.status}
                  onChange={(e) => updateStatus(o.id, e.target.value)}
                  style={styles.select}
                >
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}

const styles = {
  title: { fontSize: "1.4rem", color: theme.accent, marginBottom: "20px" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  select: {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
};
