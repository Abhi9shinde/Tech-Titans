import React from 'react'

function ImpactStats() {
    return (
        <div>
            <section id="impact-stats" className="py-20 bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Environmental Impact Statistics</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">The devastating effects of paper cup usage on our environment and health are alarming. Here's what the numbers tell us.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-neutral-800 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">16 Billion</h3>
                                <p className="text-gray-400">Paper cups discarded annually</p>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-400">That's enough cups to circle the Earth 55 times!</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp delay-200" style={{ "animation-delay": "0.2s" }}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">6.5 Million</h3>
                                <p className="text-gray-400">Trees cut down yearly</p>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-400">Just for producing paper cups</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animation-delay": "0.4s" }}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">4 Billion</h3>
                                <p className="text-gray-400">Gallons of water wasted</p>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-400">In the manufacturing process</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center animate__animated animate__fadeIn">
                        <div className="inline-flex items-center p-4 bg-yellow-50 rounded-lg">
                            <svg className="w-6 h-6 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                            <p className="text-yellow-800">These statistics represent just one year of paper cup usage globally</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ImpactStats
