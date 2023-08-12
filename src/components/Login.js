import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div className="center-container">
      <h2>Sign in to your PopX account</h2>
      <p>lorem ipsum dolor sit amet,consectur adipising eltt</p>
      <br />
      <form>
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
        <button className="login-button larger-input">Login</button>
      </form>
    </div>
  );
};

export default Login;
