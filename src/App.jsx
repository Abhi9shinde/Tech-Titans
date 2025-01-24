import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Phases from './pages/Phases';
import Risk from './pages/Risk';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CommunityDashboard from './components/CommunityDashboard';
import Solutions from './pages/Solutions';

function App() {
  const location = useLocation();

  const hideLayout = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phase" element={<Phases />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/community" element={<CommunityDashboard />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/risks" element={<Risk />} />
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
