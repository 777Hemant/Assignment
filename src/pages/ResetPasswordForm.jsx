import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPasswordForm() {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reset password logic here (e.g., verify OTP, update password)
    alert('Password reset successful!');
  };

  return (
    <div className="flex space-y-4 min-h-screen items-center justify-center bg-gray-100">  {/* Match login page background */}
      <div className="px-8 py-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Reset Password</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="otp" className="text-sm text-gray-700">
              OTP
            </label>
            <input
              id="otp"
              name="otp"
              type='tel'
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:z-10 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="text-sm text-gray-700">
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:z-10 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-sm text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:z-10 sm:text-sm"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
