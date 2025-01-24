import React from 'react'
import { Link } from 'react-router-dom'
function EnvironmentalRisks() {
    return (
        <div className='border-t border-neutral-800'>
            <section id="environmental-risks" class="py-20 bg-neutral-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Environmental Risks</h2>
                        <p class="text-lg text-gray-300 max-w-2xl mx-auto">Understanding the severe environmental impact of disposable paper cups on our planet.</p>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
                            <div class="bg-red-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Microplastic Pollution</h3>
                            <p class="text-gray-400">Paper cups contain a plastic lining that breaks down into harmful microplastics, contaminating our soil and water systems.</p>
                        </div>

                        <div class="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animation-delay": "0.2s" }}>
                            <div class="bg-yellow-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Deforestation Impact</h3>
                            <p class="text-gray-400">Massive deforestation occurs to meet the demand for paper cup production, disrupting ecosystems and biodiversity.</p>
                        </div>

                        <div class="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animation-delay": "0.4s" }}>
                            <div class="bg-blue-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Carbon Footprint</h3>
                            <p class="text-gray-400">Manufacturing and transportation of paper cups contribute significantly to greenhouse gas emissions.</p>
                        </div>
                    </div>

                    <div class="mt-16 text-center">
                        <Link to="/risks" class="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-medium transition-all transform hover:scale-105 animate__animated animate__fadeIn">
                            Explore More Environmental Risks
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EnvironmentalRisks
