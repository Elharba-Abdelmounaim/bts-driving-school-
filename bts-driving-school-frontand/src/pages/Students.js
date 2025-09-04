import { useEffect, useState } from "react";
import api from "../api/axios";

export default function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await api.get("students/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudents(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.username} - {student.license_category}
          </li>
        ))}
      </ul>
    </div>
  );
}
