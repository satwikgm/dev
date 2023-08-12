import React, { useState } from 'react';
import './CreateAccount.css'; // Import your custom styles
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [agencyStatus, setAgencyStatus] = useState(null);

  const handleAgencyStatusChange = (value) => {
    setAgencyStatus(value);
  };

  return (
    <div className="center-container">
      <h2>Create your PopX Account</h2>
      <form>
        <div className="input-container">
          <div className="field-container">
            <label>Name</label>
            <input className="dotted-border larger-input" type="text" placeholder="Enter your name" />
          </div>
        </div>
        <div className="input-container">
          <div className="field-container">
            <label>Phone</label>
            <input className="dotted-border larger-input" type="text" placeholder="Enter your phone number" />
          </div>
        </div>
        <div className="input-container">
          <div className="field-container">
            <label>Email</label>
            <input className="dotted-border larger-input" type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="input-container">
          <div className="field-container">
            <label>Password</label>
            <input className="dotted-border larger-input" type="password" placeholder="Enter your password" />
          </div>
        </div>
        <div className="input-container">
          <div className="field-container">
            <label>Company Name</label>
            <input className="dotted-border larger-input" type="text" placeholder="Enter your company name" />
          </div>
        </div>
        <div className="input-container">
          <div className="field-container">
            <label>Are you an agency?</label>
            <div>
              <input
                type="radio"
                id="yes"
                name="agency"
                value="yes"
                onChange={() => handleAgencyStatusChange('yes')}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="agency"
                value="no"
                onChange={() => handleAgencyStatusChange('no')}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        <Link to="/settings">
          <button className="create-account-button larger-button">Create Account</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateAccount;
