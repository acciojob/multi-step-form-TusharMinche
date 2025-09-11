import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const[step,setStep]=useState(1);
  const[formData,setFormData]=useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""

  })

  const nextStep=()=>{
    console.log("Moving to next step");
    setStep(prev => Math.min(prev + 1, 3))
  }
  const prevStep=()=>{
    setStep(prev => Math.max(prev - 1, 1))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data:", formData);
    alert("Form submitted successfully!");
  };
  return (
    <div>
      <Step step={step} formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} handleSubmit={handleSubmit} />
        
    </div>
  )
}

export default App