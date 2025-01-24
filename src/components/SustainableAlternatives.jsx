import React from 'react';

function SustainableAlternatives() {




  return (
    <div className='border-t border-neutral-800'>
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


        </div>
      </section>
    </div>
  );
}

export default SustainableAlternatives;
