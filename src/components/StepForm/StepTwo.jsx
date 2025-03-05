import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import mail from '../../assets/images/mail.svg';
import password from '../../assets/images/password.svg';
import user from '../../assets/images/user.svg';
import phone from '../../assets/images/phone.svg';

const StepTwo = ({ nextStep, prevStep }) => {


    return (
        <div className='mw-630 mx-auto'>

            <div className='mb-4 text-center'>
                <h3 className='fw-bold'>Enter your Livestock Information </h3>
            </div>
            <Form>

                <>
                    <Select selectWrapperClass="mb-20" selectFieldClass="input-field ps-12" options={[{ value: "Type Of Livestock", label: "Type Of Livestock" }, { value: "option2", label: "Option 2" }, { value: "option3", label: "Option 3" }]} className="custom-select" />
                    <Input inputWrapperClass="mb-20" type='text' inputFieldClass='input-field ps-12' placeholder="Total number Of Livestock" />
                    <Input inputWrapperClass="mb-20" type='text' inputFieldClass='input-field ps-12' placeholder="Weight of All Livestock" />
                    <Select selectWrapperClass="mb-20" selectFieldClass="input-field ps-12" options={[{ value: "Purpose of Livestock", label: "Purpose of Livestock" }, { value: "option2", label: "Option 2" }, { value: "option3", label: "Option 3" }]} className="custom-select" />
                    <Input inputWrapperClass="mb-20" type='text' inputFieldClass='input-field ps-12' placeholder="Other Specify" />

                    <label variant="h6" className='font-18'>Are you buying livestock from us or bringing it to our collection center?</label>
                    <Select selectWrapperClass="mb-20" selectFieldClass="input-field ps-12" options={[{ value: "Purpose of Livestock", label: "Purpose of Livestock" }, { value: "option2", label: "Option 2" }, { value: "option3", label: "Option 3" }]} className="custom-select" />
                </>

                <div className="d-flex gap-3 buttonWrapper">
                    <Button variant="light" className="w-100" onClick={() => prevStep()}>Back</Button>
                    <Button variant="dark" className="w-100" onClick={() => nextStep()}>Next</Button>
                </div>
            </Form>

        </div>
    );
};

export default StepTwo;
