import React, { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import StepContent from './components/StepContent/StepContent';

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div className="App">
      <ProgressBar activeStep={activeStep} />
      <StepContent activeStep={activeStep} />
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
}

export default App;
