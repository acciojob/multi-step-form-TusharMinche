Step.js
import React from 'react'

const Step = ({ step, formData, setFormData, nextStep, prevStep, handleSubmit }) => {
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  return (
    <form>

    {step === 1 && <h2>Customer Details</h2>}
      {step === 2 && <h2>Car Details</h2>}
      {step === 3 && <h2>Payment Details</h2>}

        <div id="step1">
     {step === 1 && (
        <>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          <button type="button" onClick={nextStep}>Next</button>
          </>
        )}
        </div>
  
      <div id="step2">
      {step === 2 && (
        <>
          <label htmlFor="model">Brand:</label>
          <input
            type="text"
            id="model"
            value={formData.model}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="car_price">Model:</label>
          <input
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
          />
          <button type="button" onClick={prevStep}>Previous</button>
          <button type="button" onClick={nextStep}>Next</button>
        </>
      )}
      </div>
       
       <div id="step3">
      {step === 3 && (
        <>
          <label htmlFor="card_info">Credit Card Number:</label>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="expiry_date">Expiration Date:</label>
          <input
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
          <button type="button" onClick={prevStep}>Previous</button>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
      )}
      </div>


      {/* <div>
        {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div> */}



    </form>
  )
}

export default Step