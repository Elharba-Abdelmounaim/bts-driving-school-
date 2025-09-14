import { useNavigate } from "react-router-dom";

export default function Navbar({ role, setRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setRole(null);
    navigate("/"); // back to login
  };

const handleDashboard = () => {
  if (role === "student") navigate("/student");
  if (role === "instructor") navigate("/instructor");
  if (role === "admin") navigate("/admin");
};

  return (
    <nav
      style={{
        background: "#2c3e50",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2 style={{ cursor: "pointer" }} onClick={handleDashboard}>
        🚘 Driving School
      </h2>

      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        <li style={{ cursor: "pointer" }} onClick={handleDashboard}>
          Dashboard
        </li>
        <li style={{ cursor: "pointer" }} onClick={() => navigate("/lessons")}>
          Lessons
        </li>
        <li style={{ cursor: "pointer" }} onClick={() => navigate("/materials")}>
          Materials
        </li>
        <li style={{ cursor: "pointer" }} onClick={() => navigate("/exams")}>
          Exams
        </li>
      </ul>

      <button
        onClick={handleLogout}
        style={{
          background: "#e74c3c",
          border: "none",
          padding: "8px 15px",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
}
