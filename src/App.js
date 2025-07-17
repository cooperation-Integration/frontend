// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage";
import FindEmailPage from './pages/FindEmailPage';
import FindPasswordPage from './pages/FindPasswordPage';
import LoginSuccessPage from './pages/LoginSuccessPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/find-email" element={<FindEmailPage />} />
          <Route path="/find-password" element={<FindPasswordPage />} />
          <Route path="/loginSuccess" element={<LoginSuccessPage />} />
        </Routes>
      </Router>
  );
}

export default App;

