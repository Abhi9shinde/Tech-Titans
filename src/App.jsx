import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Phases from './pages/Phases';
import Risk from './pages/Risk';
function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phase" element={<Phases />} />
          <Route path="/risks" element={<Risk />}></Route>
        </Routes>
        <Footer />

      </Router>
    </div>
  )
}

export default App
