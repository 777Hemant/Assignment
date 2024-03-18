import React from 'react'
import { Link } from 'react-router-dom'

function RoundedButton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex space-x-4">
        <Link to="/login"
          type="button"
          className="w-64 inline-flex items-center justify-center px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </Link>
        <Link to="/signup"
          type="button"
          className="w-64 inline-flex items-center justify-center bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default RoundedButton;
