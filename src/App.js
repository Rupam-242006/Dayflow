import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import EmployeeDashboard from './EmployeeDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* The default page is your Login screen */}
        <Route path="/" element={<Login />} />
        
        {/* The dashboard page it redirects to */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;