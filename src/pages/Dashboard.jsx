// Install dependencies before using:
// npm install react-router-dom

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import Impact from './Impact';
import Overview from './Overview';
import Sidebar from '../components/Sidebar';
import DashNav from '../components/DashNav';

function Dashboard() {
  return (
    <div className="dashboard ">
      <DashNav />
      <div className="flex w-full flex-shrink-0 bg-neutral-900">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="overview" />} />
          <Route path="overview" element={<Overview />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="impact" element={<Impact />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;