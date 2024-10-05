import React, { useEffect, useState } from "react";
import { useContext } from "react";
import userListContext from "../../context/userListContext";
import "./style.css";
import PaginationComponent from "../Pagination";

function TeacherTable() {
  const { teacherData, page, setPage } = useContext(userListContext);
  const [totalPages, setTotalPages] = useState(Math.ceil(teacherData.length / 10))
  const [list, setList] = useState([]);

  function handlePageChange(event, value) {
    setPage(value);
    const startingIndex = (value - 1) * 10;
    const lastIndex = startingIndex + 10;
    setList(teacherData.slice(startingIndex, lastIndex));
  }

  useEffect(() => {
    // Calculate the starting and ending index based on the current page
    
    const startingIndex = (page - 1) * 10;
    const lastIndex = startingIndex + 10;

    // Update the list based on the sliced data for the current page
    setList(teacherData.slice(startingIndex, lastIndex));

    // Update total pages whenever teacherData changes
    setTotalPages(Math.ceil(teacherData.length / 10));
  }, [teacherData, page]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Record ID</th>
            <th>Teacher Name</th>
            <th>Teacher Id</th>
            <th>Department</th>
            <th>Student</th>
            <th>Status</th>
            <th>All Details</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? list.map((teacher) => (
            <tr key={teacher.recordID}>
              <td>{teacher.recordID}</td>
              <td>{teacher.name}</td>
              <td>{teacher.id}</td>
              <td>{teacher.department}</td>
              <td>{teacher.students}</td>
              <td className={`status ${teacher.status.toLowerCase()}`}>{teacher.status}</td>
              <td>
                <a href="#more-details">View More</a>
              </td>
            </tr>
          )) : (
            // Wrap the "No User Found" message inside a <tr> and use colspan to span across the table width
            <tr>
              <td colSpan="7">
                <p className="no-user">No User Found</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {
        totalPages > 1 && <PaginationComponent page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
      }

    </div>
  );
}

export default TeacherTable;
