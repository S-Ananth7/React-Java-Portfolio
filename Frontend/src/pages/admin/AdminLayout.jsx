import React from "react";
import AdminNav from "./AdminNav";

export default function AdminLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb" }}>
      <AdminNav />
      <main style={{ padding: "30px" }}>{children}</main>
    </div>
  );
}
