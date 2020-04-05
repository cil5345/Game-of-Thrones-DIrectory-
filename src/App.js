import React from "react";
import Header from "./components/Header";
import  Search from "./components/Search";
import EmployeeTable from "./components/EmployeeTable";
import "./style.css";


function App() {
  return (
    <>
    <div class='backgrnd'>
      <Header /> 
      <EmployeeTable />
      </div>
      
    </>
  );
}

export default App;
