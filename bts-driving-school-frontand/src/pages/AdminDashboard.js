import Navbar from "../components/Navbar";

export default function AdminDashboard({ setRole }) {
  return (
    <div>
      <Navbar setRole={setRole} />
      <h1>Admin Dashboard</h1>
    </div>
  );
}
