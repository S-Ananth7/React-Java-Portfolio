import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import { theme } from "../../components/Theme";

export default function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", active: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", active: false },
  ]);

  const toggleUser = (id) =>
    setUsers(users.map((u) => (u.id === id ? { ...u, active: !u.active } : u)));

  return (
    <AdminLayout>
      <h2 style={styles.title}>👥 User Management</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td style={{ color: u.active ? theme.accent : "#ef4444" }}>
                {u.active ? "Active" : "Blocked"}
              </td>
              <td>
                <button onClick={() => toggleUser(u.id)} style={styles.toggleBtn}>
                  {u.active ? "Block" : "Unblock"}
                </button>
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
  toggleBtn: {
    background: theme.primary,
    color: theme.dark,
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
