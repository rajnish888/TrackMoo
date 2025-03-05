import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from '../components/ui/Button';

const StepOne = () => {
  const [subStep, setSubStep] = useState(1);

  // Handle next step
  const handleNext = () => {
    if (subStep === 1) {
      setSubStep(2);
    } else {
      console.log("OTP verified and continuing to the next step");
    }
  };

  return (
    <div className='mw-520 mx-auto'>
      <div className='text-center'>
        <Form>
          {subStep === 1 ? (
            <>
              one
            </>
          ) : (
            <>
              two
            </>
          )}

          <Button variant="dark" className="w-100" onClick={handleNext}>
            {subStep === 1 ? 'Next' : ''}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StepOne;
