import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeProfile from './components/EmployeeProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Welcome to the Employee Management App</h1>
        <nav>
          <Link to="/">Employee List</Link> |{" "}
          <Link to="/add">Add Employee</Link>
        </nav>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/profile/:id" element={<EmployeeProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
