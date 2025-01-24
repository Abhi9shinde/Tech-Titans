import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Phases from './pages/Phases';
import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation();

  // Define routes where Navbar and Footer should be hidden
  const hideLayout = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {!hideLayout && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phase" element={<Phases />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
