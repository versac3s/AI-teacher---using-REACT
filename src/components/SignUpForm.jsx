import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css'; // Import the CSS file

function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    address: '',
    email: '',
    phone: '',
    language: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., API call
    console.log('Form submitted:', formData);
    // Navigate to /Avatar route
    navigate('/Avatar');
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="label">Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label className="label">Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label className="label">Mother's Name:</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label className="label">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label className="label">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label className="label">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label className="label">Language:</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select a language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <div className="formGroup">
          <label className="label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
