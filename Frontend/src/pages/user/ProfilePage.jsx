import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ProfilePage.css";

export default function ProfilePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest User",
    email: "guest@example.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("✅ Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="User Avatar"
          className="profile-avatar"
        />

        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>

        <div className="profile-buttons">
          <button
            className="profile-btn edit-btn"
            onClick={() => alert("✏️ Edit profile feature coming soon!")}
          >
            ✏️ Edit Profile
          </button>

          <button className="profile-btn logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}
