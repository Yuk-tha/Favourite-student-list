import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {
  const { addFavourite } = useContext(StudentContext);

  const students = [
    { id: 1, name: "Yuktha", rollNo: "MCA001" },
    { id: 2, name: "Subha", rollNo: "MCA002" },
    { id: 3, name: "Priya", rollNo: "MCA003" },
    { id: 4, name: "Karthick", rollNo: "MCA004" },
    { id: 5, name: "Rahul", rollNo: "MCA005" }
  ];

  return (
    <div className="container">
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id} className="card">
          <h3>{student.name}</h3>

          <p>Roll No: {student.rollNo}</p>

          <button
            onClick={() => addFavourite(student)}
          >
            Add to Favourite
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;