import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TeacherTable from "./components/TeacherTable";
import "./App.css";
import AddTeacherModal from "./components/TeacherModal";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <TeacherTable />
      </div>
      
    </div>
  );
}

export default App;
