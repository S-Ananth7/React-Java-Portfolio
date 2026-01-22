import React from "react";
import { theme } from "../../components/Theme";

export default function AdminDashboardPage() {
  const cards = [
    { title: "Total Products", value: 128 },
    { title: "Total Users", value: 645 },
    { title: "Pending Orders", value: 23 },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9fafb",
        padding: "50px 30px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "28px",
          color: theme.primary,
        }}
      >
        🧭 Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gap: "25px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {cards.map((c) => (
          <div
            key={c.title}
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "25px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              textAlign: "center",
              color: theme.textDark,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
            }}
          >
            <h4 style={{ color: theme.textLight, fontSize: "16px" }}>{c.title}</h4>
            <h2 style={{ color: theme.primary, marginTop: "12px", fontSize: "30px" }}>
              {c.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
