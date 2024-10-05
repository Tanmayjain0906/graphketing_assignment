import React, { useContext, useState } from "react";
import "./style.css";
import userListContext from "../../context/userListContext";


const AddTeacherModal = ({ isOpen, onClose}) => {
  const [recordID, setRecordId] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [department, setDepartment] = useState("");
  const [students, setStudents] = useState("");
  const [status, setStatus] = useState("Active");

  const {addInList} = useContext(userListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!teacherName || !teacherId || !department || !students || !recordID)
    {
      alert("Please Fill all the feilds!");
      return;
    }
     
    const obj = {recordID, name: teacherName, id: teacherId, department, students, status};
    addInList(obj);
    onClose();
  };

  const resetForm = () => {
    setTeacherName("");
    setTeacherId("");
    setDepartment("");
    setStudents("");
    setStatus("Active");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Teacher</h2>
        <form onSubmit={handleSubmit}>
        <label>
            Record ID:
            <input
              type="text"
              value={recordID}
              onChange={(e) => setRecordId(e.target.value)}
            />
          </label>
          <label>
            Teacher Name:
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
            />
          </label>
          <label>
            Teacher ID:
            <input
              type="text"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
            />
          </label>
          <label>
            Department:
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </label>
          <label>
            Students:
            <input
              type="number"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
            />
          </label>
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Blocked">Blocked</option>
              <option value="Suspended">Suspended</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Add Teacher</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherModal;
