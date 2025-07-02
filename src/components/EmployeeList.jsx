// src/components/EmployeeList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ListStyle.css';

const EmployeeList = () => {
  const employees = useSelector(state => state.employees.employees); // Correct path

  if (!employees || employees.length === 0) {
    return (
      <div className="list-container">
        <h2>Employee Directory</h2>
        <p>No employees added yet.</p>
        <Link to="/add" className="back-link">Add Employee</Link>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h2>Employee Directory</h2>
      <ul className="employee-list">
        {employees.map(emp => (
          <li key={emp.id} className="employee-card">
            <Link to={`/profile/${emp.id}`} className="employee-name">
              {emp.name}
            </Link>
            <p className="employee-info">
              {emp.role} | {emp.department}
            </p>
          </li>
        ))}
      </ul>
      <Link to="/add" className="back-link">Add Employee</Link>
    </div>
  );
};

export default EmployeeList;
