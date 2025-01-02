import React from 'react';
import './LoginInput.css'; 

function LoginInput({ labelText, placeholder }) {
  return (
    <div className="email-input-container">
      <label className="email-label">{labelText}</label>
      <input type="email" className="email-input" placeholder={placeholder} />
    </div>
  );
}

export default LoginInput;