// src/components/EmployeeProfile.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './ProfileStyle.css';

const EmployeeProfile = () => {
  const { id } = useParams();
  const employees = useSelector(state => state.employees.employees); // Correct path
  const employee = employees.find(emp => emp.id === id);

  if (!employee) {
    return (
      <div className="profile-container">
        <h2>No Employee Selected</h2>
        <p>Please select an employee from the list to view their profile details.</p>
        <Link to="/" className="back-link">Back to Employee List</Link>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Employee Profile</h2>
      <div className="profile-details">
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Hire Date:</strong> {employee.hireDate}</p>
      </div>
      <Link to="/" className="back-link">Back to Employee List</Link>
    </div>
  );
};

export default EmployeeProfile;
