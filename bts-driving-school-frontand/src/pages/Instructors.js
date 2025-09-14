import Navbar from "../components/Navbar";

export default function Instructors({ setRole }) {
  return (
    <div>
      <Navbar setRole={setRole} />
      <h1>Instructor Dashboard</h1>
    </div>
  );
}
