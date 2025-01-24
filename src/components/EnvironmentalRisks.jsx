import React from 'react'

function EnvironmentalRisks() {
    return (
        <div>
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

                        <div class="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animation-delay": "0.6s" }}>
                            <div class="bg-green-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Energy Consumption</h3>
                            <p class="text-gray-400">The production process requires extensive energy usage, depleting natural resources and increasing pollution.</p>
                        </div>

                        <div class="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animation-delay": "0.8s" }}>
                            <div class="bg-purple-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Water Pollution</h3>
                            <p class="text-gray-400">Chemical treatments and coating processes contaminate water sources, affecting aquatic ecosystems.</p>
                        </div>

                        <div class="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animation-delay": "1s" }}>
                            <div class="bg-teal-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-4">Landfill Impact</h3>
                            <p class="text-gray-400">Non-biodegradable components in paper cups contribute to growing landfill crisis and soil contamination.</p>
                        </div>
                    </div>

                    <div class="mt-16 text-center">
                        <a href="#sustainable-alternatives" class="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-medium transition-all transform hover:scale-105 animate__animated animate__fadeIn">
                            Explore Sustainable Alternatives
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EnvironmentalRisks
