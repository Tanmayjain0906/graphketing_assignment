import React, { useState } from "react";
import teachers from "../../assets/Teachers.svg"
import department from "../../assets/Department.svg"
import library from "../../assets/library.svg"
import add from "../../assets/Add.svg"
import "./style.css";
import AddTeacherModal from "../TeacherModal";

function Sidebar() {
 
    const [isOpen, setIsOpen] = useState(false);

    function handleAdd()
    {
        setIsOpen(!isOpen);
    }

  return (
    <div className="sidebar">
      <div className="sidebar-logo">QMS</div>
      <ul className="sidebar-menu">
        <li className="sidebar-item active"> <img src={teachers} />Teachers</li>
        <li className="sidebar-item"><img src={department} />Department</li>
        <li className="sidebar-item"><img src={library} />Library</li>
        <li className="sidebar-item" onClick={handleAdd}><img src={add} />Add Teacher</li>
      </ul>

      {
        isOpen && <AddTeacherModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}/>
      }
    </div>
  );
}

export default Sidebar;
