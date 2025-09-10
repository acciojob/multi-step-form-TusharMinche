// InputField.js
import React from "react";

const InputField = ({ data, formData, setFormData }) => {
  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  }

  return (
    <div>
      <h3>{data.title}</h3>
      {data.fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type="text"
            id={field.id}
            value={formData[field.id]}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
};

export default InputField;
