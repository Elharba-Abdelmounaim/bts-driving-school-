import React from "react";
import Navbar from "../components/Navbar";

function StudentDashboard({ setRole }) {
  return (
    <div>
      <Navbar role="student" setRole={setRole} />
      <h1>🎓 Student Dashboard</h1>
      <p>Welcome! Here are your lessons, materials and exams.</p>
    </div>
  );
}

export default StudentDashboard;
