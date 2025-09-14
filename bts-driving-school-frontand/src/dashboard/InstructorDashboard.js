import React from "react";
import Navbar from "../components/Navbar";

function InstructorDashboard({ setRole }) {
  return (
    <div>
      <Navbar role="instructor" setRole={setRole} />
      <h1>👨‍🏫 Instructor Dashboard</h1>
      <p>Manage your students and lessons here.</p>
    </div>
  );
}

export default InstructorDashboard;
