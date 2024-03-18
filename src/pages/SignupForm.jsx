import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordInput from '../components/PasswordInput';

function SignupForm() {
  const inputWidth = '200px';
  const [password, setPassword] = useState(''); // Add state for password if needed

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="px-8 py-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="fullName" className="text-sm text-gray-700">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:z-10 sm:text-sm ${inputWidth}`}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="text-sm text-gray-700">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:z-10 sm:text-sm ${inputWidth}`}
            />
          </div>
          <div className="space-y-1">
            {/* Integrate PasswordInput with password visibility toggle */}
            <PasswordInput
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="inline-block text-xs text-gray-500">
              <label className="inline-flex items-center">
                <input type="checkbox" name="remember" className="text-gray-600 rounded border-gray-300 h-5 w-5 focus:ring-0 focus:outline-none mr-2" />
                Remember me for 30 days
              </label>
            </div>
            <Link to="/login" className="text-sm text-gray-700 hover:underline">
              Already have an account? Login
            </Link>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1"
            >
              Sign Up
            </button>
            <div className='mt-32'> <button className='text-blue-600'>Skip</button></div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
