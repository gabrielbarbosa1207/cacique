import React from 'react';
import Step1 from '../Screens//Step1.js';
import Step2 from '../Screens/Step2.js';
import Step3 from '../Screens/Step3.js';
import Step4 from '../Screens/Step4.js'


function StepContent({ activeStep }) {
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  return <div>{steps[activeStep]}</div>;
}

export default StepContent;
