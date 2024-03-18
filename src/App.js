import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import CityList from './pages/CityList';
import SignupForm from './pages/SignupForm';
import LoginForm from './pages/LoginForm';
import ResetPasswordForm from './pages/ResetPasswordForm';
import LandingPage from './pages/LandingPage';
import ForgotPasswordForm from './pages/ForgotPasswordForm';
import RoundedButton from './pages/RoundedButton';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" exact element={<LandingPage/>} />
          <Route path="/signup" element={<SignupForm/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/reset-password" element={<ResetPasswordForm/>} />
          <Route path="/forgot-password" element={<ForgotPasswordForm/>} />
          <Route path="/city-list" element={<CityList/>} />
        </Routes>
      </div>
   
  );
}

export default App;
