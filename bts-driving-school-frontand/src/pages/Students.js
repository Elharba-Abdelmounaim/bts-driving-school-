import Navbar from "../components/Navbar";

export default function Students({ setRole }) {
  return (
    <div>
      <Navbar setRole={setRole} />
      <h1>Student Dashboard</h1>
    </div>
  );
}
