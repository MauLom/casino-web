import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import DashboardPage from './views/DashboardPage';
import NotFoundPage from './views/NotFoundPage';
import './styles.css';

function App() {
  return (
    <div class='background-image'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* The "*" path is used for matching not found routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
