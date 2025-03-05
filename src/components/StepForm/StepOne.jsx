import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import mail from '../../assets/images/mail.svg';
import password from '../../assets/images/password.svg';
import user from '../../assets/images/user.svg';
import phone from '../../assets/images/phone.svg';

const StepOne = ({ nextStep, prevStep }) => {
    const [subStep, setSubStep] = useState(1);
    const [otp, setOtp] = useState(new Array(6).fill("")); // 5-digit OTP storage

    // Handle OTP Input
    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return; // Only allow numbers

        let newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        // Move to the next input field if a digit is entered
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    // Handle OTP verification
    const verifyOtp = (event) => {
        event.preventDefault();
        const enteredOtp = otp.join(""); // Combine digits

        if (enteredOtp.length !== 6) {
            alert("Please enter a valid 6-digit OTP.");
            return;
        }

        console.log("Entered OTP:", enteredOtp);
        nextStep(); // Proceed if valid
    };

    return (
        <div className='mw-520 mx-auto'>
            <div className='text-center'>
                <div className='mb-4 mw-470'>
                    <h3 className='fw-bold'>{subStep === 1 ? 'Enter Your Basic Information' : 'OTP Verification'}</h3>
                    <p className={`${subStep === 2 ? 'mt-2' : ""}`}>{subStep === 1 ? '' : 'Enter verification code sent to your registered email address below.'}</p>
                </div>
                <Form onSubmit={subStep === 2 ? verifyOtp : undefined}>
                    {subStep === 1 ? (
                        <>
                            <Input inputWrapperClass="mb-20" name="firstName" iconLeft={<img className='img-fluid' src={user} alt='User Icon' />} type='text' inputFieldClass='input-field' placeholder="Enter first name" />
                            <Input inputWrapperClass="mb-20" name="lastName" iconLeft={<img className='img-fluid' src={user} alt='User Icon' />} type='text' inputFieldClass='input-field' placeholder="Enter last name" />
                            <Input inputWrapperClass="mb-20" name="email" iconLeft={<img className='img-fluid' src={mail} alt='Mail Icon' />} type='email' inputFieldClass='input-field' placeholder="Enter your email" />
                            <Input inputWrapperClass="mb-20" name="phone" iconLeft={<img className='img-fluid' src={phone} alt='Phone Icon' />} type='tel' inputFieldClass='input-field' placeholder="Enter Phone No." />

                            <Input inputWrapperClass="mb-20" name="password" iconLeft={<img className="img-fluid" src={password} alt="Password Icon" />} type="password" inputFieldClass="input-field" placeholder="Enter your password" />
                            <Input inputWrapperClass="mb-20" name="confirmPassword" iconLeft={<img className="img-fluid" src={password} alt="Password Icon" />} type="password" inputFieldClass="input-field" placeholder="Confirm password" />

                            <Select selectWrapperClass="mb-20" selectFieldClass="input-field ps-12" options={[{ value: "Country / region ", label: "Country / region" }, { value: "option2", label: "Option 2" }, { value: "option3", label: "Option 3" }]} className="custom-select" />

                            <Select selectWrapperClass="mb-20" selectFieldClass="input-field" iconLeft={<img className='img-fluid' src={user} alt='User Type Icon' />} options={[{ value: "User Type", label: "User Type" }, { value: "option2", label: "Option 2" }, { value: "option3", label: "Option 3" }]} className="custom-select" />

                            <Input type='text' inputFieldClass='input-field ps-12' placeholder="Other Specify" />
                        </>
                    ) : (
                        <>
                            <div className="otpInputWrapper d-flex justify-content-between gap-2">
                                {otp.map((digit, index) => (
                                    <Input
                                    inputFieldClass='input-field text-center p-3'
                                        key={index}
                                        id={`otp-input-${index}`}
                                        type="text"
                                        maxLength="1"
                                        className="otp-field text-center"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                    />
                                ))}
                            </div>
                            <p className="mt-3 text-start">Resend OTP within: 00:30</p>
                        </>
                    )}

                    <div className="d-flex gap-3 buttonWrapper">
                        <Button variant="light" className="w-100" onClick={() => subStep === 2 ? setSubStep(1) : prevStep()}>Back</Button>
                        <Button variant="dark" className="w-100" type="submit" onClick={(event) => {
                            event.preventDefault();
                            subStep === 1 ? setSubStep(2) : verifyOtp(event);
                        }}>
                            {subStep === 1 ? 'Next' : 'Verify & Continue'}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default StepOne;
