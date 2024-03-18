import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BackComponent() {
  const navigate = useNavigate();

 
  return (
    <button
      className="flex items-center space-x-2 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Back</span>
    </button>
  );
}

export default BackComponent;
