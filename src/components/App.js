
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [ind,setInd] = useState(1)
  return (
    <div>
      <Step ind={ind} setInd={setInd}/>
    </div>
  )
}

export default App