import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    // Simulate sending an email to reset password
    console.log('An email has been sent to reset the password')
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto shadow-sm sm:rounded-lg overflow-hidden">
        <div className="bg-white py-4 px-6 sm:p-8">
          <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
            Forgot Password
          </h1>
          <p className='text-center m-2'>Provide us the email id/ mobile of your account and we will send you an email/otp with instructions to reset your password.</p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-sm text-gray-700 block"
              >
                Mobile Number / Email ID
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:z-10 sm:text-sm"
               placeholder=' Mobile Number / Email ID'
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to="/reset-password"
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Send Reset Instructions
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordForm