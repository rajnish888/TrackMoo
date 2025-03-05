import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa";


const Stepper = ({ step }) => {
    const steps = ["1. Basic Information", "2. Livestock Information", "3. Subscription plan", "4. Marketplace Integration"];
    
    return (
        <div className="stepper-container">
            <div className="stepper">
                {steps.map((label, index) => (
                    <div key={index} className={`step ${index + 1 <= step ? 'active' : ''}`}>
                        {index + 1 < step ? <span></span> : <span></span>}
                        <h5 className={index + 1 === step ? "current-step" : ""}>{label}</h5>
                    </div>
                ))}
            </div>
            <ProgressBar now={(step / steps.length) * 100} variant="success" />

        </div>
    );
};

export default Stepper;
