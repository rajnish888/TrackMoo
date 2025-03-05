import React from 'react'
import Button from '../ui/Button';

const StepFour = ({ nextStep = () => {}, prevStep = () => {} }) => {
  return (
    <div>

      StepFour


      <div className="d-flex gap-3 mt-3">
        <Button variant="light" className="w-100" onClick={prevStep}>Back</Button>
        <Button variant="dark" className="w-100" onClick={nextStep}>Next</Button>
      </div>

    </div>
  )
}

export default StepFour