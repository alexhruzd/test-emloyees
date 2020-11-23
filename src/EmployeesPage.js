import React from "react";
import Employees from "./Employees";
import InputEmployee from "./InputEmployee";

const EmployeesPage = () => {
  return (
    <div className="row">
      <Employees className="col s6" />
      <InputEmployee />
    </div>
  );
};

export default EmployeesPage;

