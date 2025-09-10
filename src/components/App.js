// App.js
import React, { useState } from "react";
import "./../styles/App.css";
import InputField from "./InputField";

const formTypes = [
  {id: 0, title: "Customer Details", fields: [
    { id: "first_name", label: "First Name" },
    { id: "last_name", label: "Last Name" }
  ]},
  {id: 1, title: "Car Details", fields: [
    { id: "model", label: "Car Model" },
    { id: "car_price", label: "Car Price" }
  ]},
  {id: 2, title: "Payment Details", fields: [
    { id: "card_info", label: "Card Information" },
    { id: "expiry_date", label: "Expiry Date" }
  ]}
];

const App = () => {
  const [formNumber, setFormNumber] = useState(0);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  const handleNext = () => {
  setFormNumber((prev) => Math.min(prev + 1, formTypes.length - 1));
};

const handlePrev = () => {
  setFormNumber((prev) => Math.max(prev - 1, 0));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          data={formTypes[formNumber]}
          setFormData={setFormData}
          formData={formData}
        />

        <div>
          {formNumber === 0 && <button type="button" onClick={handleNext}>Next</button>}
          {formNumber === 1 && (
            <>
              <button type="button" onClick={handlePrev}>Prev</button>
              <button type="button" onClick={handleNext}>Next</button>
            </>
          )}
          {formNumber === 2 && (
            <>
              <button type="button" onClick={handlePrev}>Prev</button>
              <button type="submit">Submit</button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default App;
