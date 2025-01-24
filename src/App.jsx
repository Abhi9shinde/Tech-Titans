import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ImpactStats from './components/ImpactStats'
import EnvironmentalRisks from './components/EnvironmentalRisks'
import HealthAwareness from './components/HealthAwareness'
import SustainableAlternatives from './components/SustainableAlternatives'
import Testimonials from './components/Testimonials'
import CommunityDashboard from './components/CommunityDashboard'
import ActionTracker from './components/ActionTracker'

function App() {
  return (
    <div>

      <Navbar />
      <HeroSection />
      <ImpactStats />
      <EnvironmentalRisks />
      <HealthAwareness />
      <SustainableAlternatives />
      <CommunityDashboard />
      <ActionTracker />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
