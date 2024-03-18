import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const inputStyle = {
  paddingRight: '30px',
};

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  right: '5px',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const inputWidth = '200px';
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        style={inputStyle}
        className='rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400   sm:text-sm ${inputWidth}'
      />
      <button onClick={togglePasswordVisibility} style={buttonStyle}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
