import React from 'react';
import ImpactCalculator from './ImpactCalculator';

function HeroSection() {
  return (
    <section id="hero" className="bg-neutral-900 text-white min-h-[70vh] pt-16 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="h-screen grid md:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Rethink <span className="text-green-500">Paper Cups</span><br />
              Reimagine Future
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join the movement to combat the environmental and health risks of disposable paper cups through innovative tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-involved" className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full font-medium text-center transition-all transform hover:scale-105 inline-flex items-center space-x-2">
                Join The Challenge <span><img src="/images/ecoFriendly.avif" alt="" className="rounded-full h-8 ml-2" /></span>
              </a>
              <a href="#impact-stats" className="border border-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-full font-medium text-center transition-all items-center">
                Learn More
              </a>
            </div>
          </div>
          <ImpactCalculator />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
