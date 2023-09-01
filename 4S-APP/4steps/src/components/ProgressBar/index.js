import React from 'react';
import './ProgressBar.css';

function ProgressBar({ activeStep }) {
  return (
    <div className="progress-bar">
      {['GIRE', 'Preencha', 'Cadastre', 'Verifique seu email'].map((label, index) => (
        <div key={index} className={`step ${index <= activeStep ? 'active' : ''}`}>
          <div className="circle"></div>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
