import React from 'react'
import HeroSection from '../components/HeroSection'
import ImpactStats from '../components/ImpactStats'
import EnvironmentalRisks from '../components/EnvironmentalRisks'
import HealthAwareness from '../components/HealthAwareness'
import SustainableAlternatives from '../components/SustainableAlternatives'
import Testimonials from '../components/Testimonials'
import ActionTracker from '../components/ActionTracker'


function Home() {
    return (
        <div>
            <HeroSection />
            <ImpactStats />
            <EnvironmentalRisks />
            <ActionTracker />
            <HealthAwareness />
            <SustainableAlternatives />
            {/* <CommunityDashboard /> */}
            <Testimonials />
        </div>
    )
}

export default Home