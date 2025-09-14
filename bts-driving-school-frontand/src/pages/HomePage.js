import React from "react";

export default function HomePage() {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload(); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to BTS Driving School 🚗</h1>
      <p>Manage students, teachers, and vehicles easily.</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Students</h3>
          <p>View and manage students</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Teachers</h3>
          <p>View and manage teachers</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h3>Vehicles</h3>
          <p>Manage driving school vehicles</p>
        </div>
      </div>

      <button
        style={{ marginTop: "30px", padding: "10px 20px", cursor: "pointer" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
