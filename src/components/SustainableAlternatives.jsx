import React, { useState } from 'react';

function SustainableAlternatives() {
  const [dailyUse, setDailyUse] = useState(2);
  const [treesSaved, setTreesSaved] = useState(24);
  const [plasticReduced, setPlasticReduced] = useState(730);

  const handleSliderChange = (event) => {
    const newDailyUse = parseInt(event.target.value);
    setDailyUse(newDailyUse);
    const annualUse = newDailyUse * 365;
    setTreesSaved(Math.round(annualUse * 0.033));
    setPlasticReduced(annualUse);
  };

  return (
    <div>
      <section id="sustainable-alternatives" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Alternatives</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Discover eco-friendly alternatives that make a real difference.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Reusable Smart Cups',
                description: 'Temperature-maintaining smart cups with tracking capabilities for monitoring your environmental impact.',
                features: ['IoT-enabled usage tracking', 'Temperature control', 'Lifetime warranty'],
                icon: 'green-500',
              },
              {
                title: 'Plant-Based Cups',
                description: '100% biodegradable cups made from renewable plant materials with zero harmful chemicals.',
                features: ['Fully compostable', 'Chemical-free', 'Carbon-negative production'],
                icon: 'blue-500',
              },
              {
                title: 'Community Cup Program',
                description: 'Join our shared cup program with smart tracking and rewards for sustainable choices.',
                features: ['Reward points system', 'Community achievements', 'Impact tracking'],
                icon: 'purple-500',
              }
            ].map((item, index) => (
              <div key={index} className="bg-neutral-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
                <div className={`bg-${item.icon}/10 w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <svg className={`w-8 h-8 text-${item.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <ul className="space-y-2 text-gray-400">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeIn">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">Impact Calculator</h3>
              <p className="text-gray-400">Calculate your environmental impact by switching to sustainable alternatives</p>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="bg-neutral-700 rounded-lg p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Daily paper cup usage</label>
                  <input
                    type="range"
                    id="usage-slider"
                    min="1"
                    max="10"
                    value={dailyUse}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-neutral-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>1 cup</span>
                    <span>10 cups</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-neutral-800 rounded-lg">
                  <p className="text-center text-lg">Your annual impact reduction:</p>
                  <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                    <div>
                      <p className="text-green-500 text-2xl font-bold">{treesSaved}</p>
                      <p className="text-sm text-gray-400">Trees Saved</p>
                    </div>
                    <div>
                      <p className="text-blue-500 text-2xl font-bold">{plasticReduced}</p>
                      <p className="text-sm text-gray-400">Cups Eliminated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SustainableAlternatives;
