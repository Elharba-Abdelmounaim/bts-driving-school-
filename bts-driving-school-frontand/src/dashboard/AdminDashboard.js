import React from "react";
import Navbar from "../components/Navbar";

function AdminDashboard({ setRole }) {
  return (
    <div>
      <Navbar role="admin" setRole={setRole} />
      <h1>⚙️ Admin Dashboard</h1>
      <p>Manage users, instructors and view system statistics.</p>
    </div>
  );
}

export default AdminDashboard;
