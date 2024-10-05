import React, { useState } from 'react';
import userListContext from './userListContext';

const list = [
  { recordID: 1, name: "Conrad Alexander", id: 10001, department: "Finance", students: 20, status: "Active" },
  { recordID: 2, name: "Marcelo Cruz", id: 10002, department: "Engineer", students: 20, status: "Inactive" },
  { recordID: 3, name: "Bing Manalo", id: 10003, department: "Arts", students: 16, status: "Blocked" },
  { recordID: 4, name: "Abby Andrews", id: 10004, department: "Finance", students: 10, status: "Active" },
  { recordID: 5, name: "Conrad Alexander", id: 10005, department: "Engineer", students: 20, status: "Active" },
  { recordID: 6, name: "Marcelo Cruz", id: 10006, department: "Arts", students: 20, status: "Suspended" },
  { recordID: 7, name: "Bing Manalo", id: 10007, department: "Arts", students: 16, status: "Active" },
  { recordID: 8, name: "Abby Andrews", id: 10008, department: "Finance", students: 10, status: "Active" },
  { recordID: 9, name: "Conrad Alexander", id: 10009, department: "Engineer", students: 20, status: "Inactive" },
  { recordID: 10, name: "Marcelo Cruz", id: 10010, department: "Arts", students: 20, status: "Inactive" },
  { recordID: 11, name: "Sophie Turner", id: 10011, department: "Finance", students: 12, status: "Active" },
  { recordID: 12, name: "George Mason", id: 10012, department: "Engineer", students: 25, status: "Blocked" },
  { recordID: 13, name: "Isabella Smith", id: 10013, department: "Arts", students: 18, status: "Active" },
  { recordID: 14, name: "Liam Brown", id: 10014, department: "Engineer", students: 15, status: "Suspended" },
  { recordID: 15, name: "Olivia Johnson", id: 10015, department: "Finance", students: 8, status: "Inactive" }
];


function UserListProvider(props) {
  const [userList, setUserList] = useState(list);
  const [filteredList, setFilteredList] = useState(list);
  const [filterName, setFilterName] = useState('');
  const [department , setDepartment] = useState("All");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("All");

  function handleCategory(departmentValue, statusValue)
  {
    setFilteredList(userList.filter((item) => {
      if(departmentValue !== "All" && statusValue === "All")
      {
        setPage(1);
        setDepartment(departmentValue)
        return item.department === departmentValue;
      }
      else if(departmentValue === "All" && statusValue !== "All")
      {
        setPage(1);
        setStatus(statusValue)
        return item.status === statusValue;
      }
      else if(departmentValue !== "All" && statusValue !== "All")
      {
        setPage(1);
        setDepartment(departmentValue)
        setStatus(statusValue)
        return item.department === departmentValue && item.status === statusValue;
      }
      else
      {
        setPage(1);
        setDepartment("All");
        setStatus("All");
        return true;
      }
    }));
  }

  

  function filterList(name) {
    const lowerCasedName = name.trim().toLowerCase();
    setFilterName(lowerCasedName);
    setFilteredList(userList.filter((item) => {
      if(department === "All" && status === "All")
      {
        setPage(1);
        return item.name.toLowerCase().includes(lowerCasedName);
      }
      else if(department !== "All" && status === "All")
      {
        setPage(1);
        return item.name.toLowerCase().includes(lowerCasedName) && item.department === department;
      }
      else if(department === "All" && status !== "All")
      {
        setPage(1);
        return item.name.toLowerCase().includes(lowerCasedName) && item.status === status;
      }
      else if(department !== "All" && status !== "All")
      {
        setPage(1);
        return item.name.toLowerCase().includes(lowerCasedName) && item.status === status && item.department === department;
      }
    }));
  }


  function addInList(newUser) {
    const updatedUserList = [...userList, newUser];
    setUserList(updatedUserList);
    setFilteredList(updatedUserList.filter((item) => item.name.toLowerCase().includes(filterName)));
  }

  return (
    <userListContext.Provider value={{ teacherData: filteredList, filterList, addInList, handleCategory, department, status, page, setPage}}>
      {props.children}
    </userListContext.Provider>
  );
}

export default UserListProvider;
