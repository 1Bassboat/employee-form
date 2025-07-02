// src/components/EmployeeForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import './FormStyle.css';  // Correct relative path for your src/components/FormStyle.css

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState({
    name: '',
    role: '',
    department: '',
    email: '',
    startDate: '',
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, role, department, email, startDate } = employee;
    if (!name || !role || !department || !email || !startDate) return;

    dispatch(addEmployee({
      ...employee,
      id: Date.now().toString(),
    }));

    setEmployee({
      name: '',
      role: '',
      department: '',
      email: '',
      startDate: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={employee.role}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={employee.startDate}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
