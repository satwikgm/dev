import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Import your custom styles

const Landing = () => {
  return (
    <div>
      <h1>Welcome to PopX</h1>
      <p>lorem ipsum dolor sit amet,</p>
      <p>consectur adipising eltt</p>
      <br />
      <Link to="/create-account">
        <button className="create-account-button">Create Account</button>
      </Link>
      <br /> <br />
      <Link to="/login">
        <button className="login-button">Already Registered? Login</button>
      </Link>
    </div>
  );
};

export default Landing;
