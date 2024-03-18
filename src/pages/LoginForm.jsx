import React, { useState } from 'react';
import PasswordInput from '../components/PasswordInput';
import { Link } from 'react-router-dom';
import BackComponent from '../components/BackComponent.jsx'; // Assuming correct path

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Optional state if PasswordInput doesn't manage its own

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="px-8 py-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <Link to="/signup"><BackComponent /></Link>
        <form>
          <div className="mb-4 flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Mobile Number / Email ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Mobile Number / Email ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <PasswordInput
              label="Password"
              value={password} // Pass state if needed
              onChange={(e) => setPassword(e.target.value)} // Update state if needed
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="inline-block text-xs text-gray-500">
              <label className="inline-flex items-center">
                <input type="checkbox" name="remember" className="text-gray-600 rounded border-gray-300 h-5 w-5 focus:ring-0 focus:outline-none mr-2" />
                Remember me for 30 days
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-gray-700 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1"
              type="submit" // Add form submission logic
            >
              Login
            </button>
            <div className='mt-32'> <button className='text-blue-600'>Skip</button></div>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default LoginForm;
