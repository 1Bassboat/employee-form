import React, { useState, useEffect } from 'react';
import './EmployeeForm.css';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !department) return;

    const newEmployee = { name, email, department };
    setEmployees([...employees, newEmployee]);

    // Reset form
    setName('');
    setEmail('');
    setDepartment('');
  };

  return (
    <div className="form-container">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Saved Employees</h3>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - {emp.email} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeForm;
