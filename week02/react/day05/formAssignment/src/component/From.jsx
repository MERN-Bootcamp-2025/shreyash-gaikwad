import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', age: '', team: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    //passing the data to the parent component
    setForm({ name: '', age: '', team: '' });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2><strong>Registration Form</strong></h2>

      <div>
        <label>Enter Name: </label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </div>

      <div>
        <label>Enter Age: </label>
        <input type="number" name="age" min={1} value={form.age} onChange={handleChange} required />
      </div>

      <div>
        <label>Select Team: </label>
        <select name="team" value={form.team} onChange={handleChange} required>
          <option value="" disabled>Select a team</option>
          <option value="Dev">Dev</option>
          <option value="DevOps">DevOps</option>
          <option value="QA">QA</option>
          <option value="Sales">Sales</option>
        </select>
      </div>

      <button type="submit" style={{ borderColor: "black", color: "white", backgroundColor: "green", padding: "10px", borderRadius: "5px" }}>Submit</button>
    </form>
  );
};

export default Form;
