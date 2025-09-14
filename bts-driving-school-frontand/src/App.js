import React, { useState } from "react";
import Login from "./pages/Login";
import StudentDashboard from "./dashboard/StudentDashboard";
import InstructorDashboard from "./dashboard/InstructorDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  const handleLogin = () => {
    setRole(localStorage.getItem("role"));
  };

  if (!role) return <Login onLogin={handleLogin} />;

  return (
    <div>
      {role === "student" && <StudentDashboard setRole={setRole} />}
      {role === "instructor" && <InstructorDashboard setRole={setRole} />}
      {role === "admin" && <AdminDashboard setRole={setRole} />}
    </div>
  );
}

export default App;
