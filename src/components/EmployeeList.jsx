import React from 'react';

function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            <span className="employee-name">{emp.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
