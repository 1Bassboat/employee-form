import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', this.state);
    this.setState({ name: '', email: '', phone: '' });
  };

  render() {
    return (
      <div className="employee-form-container">
        <form className="employee-form" onSubmit={this.handleSubmit}>
          <h2 className="form-title">Add Employee</h2>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />

          <button type="submit">Add</button>
        </form>

        <h2 className="employee-list-title">Employee List</h2>
      </div>
    );
  }
}

export default EmployeeForm;
