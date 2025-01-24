import React from 'react'

function SustainableAlternatives() {
    // const usageSlider = document.getElementById('usage-slider');
    //     const treesSaved = document.getElementById('trees-saved');
    //     const plasticReduced = document.getElementById('plastic-reduced');

    //     usageSlider.addEventListener('input', function() {
    //         const dailyUse = parseInt(this.value);
    //         const annualUse = dailyUse * 365;
    //         treesSaved.textContent = Math.round(annualUse * 0.033);
    //         plasticReduced.textContent = annualUse;
        // });
  return (
    <div>
      <section id="sustainable-alternatives" class="py-20 bg-neutral-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate__animated animate__fadeIn">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Sustainable Alternatives</h2>
                <p class="text-lg text-gray-300 max-w-2xl mx-auto">Discover eco-friendly alternatives that make a real difference.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-neutral-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
                    <div class="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Reusable Smart Cups</h3>
                    <p class="text-gray-400 mb-4">Temperature-maintaining smart cups with tracking capabilities for monitoring your environmental impact.</p>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            IoT-enabled usage tracking
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Temperature control
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Lifetime warranty
                        </li>
                    </ul>
                </div>

                <div class="bg-neutral-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{"animation-delay": "0.2s"}}>
                    <div class="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Plant-Based Cups</h3>
                    <p class="text-gray-400 mb-4">100% biodegradable cups made from renewable plant materials with zero harmful chemicals.</p>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Fully compostable
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Chemical-free
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Carbon-negative production
                        </li>
                    </ul>
                </div>

                <div class="bg-neutral-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{"animation-delay": "0.4s"}}>
                    <div class="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Community Cup Program</h3>
                    <p class="text-gray-400 mb-4">Join our shared cup program with smart tracking and rewards for sustainable choices.</p>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Reward points system
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Community achievements
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Impact tracking
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mt-16 bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeIn">
                <div class="text-center mb-8">
                    <h3 class="text-2xl font-bold">Impact Calculator</h3>
                    <p class="text-gray-400">Calculate your environmental impact by switching to sustainable alternatives</p>
                </div>
                <div class="max-w-xl mx-auto">
                    <div class="bg-neutral-700 rounded-lg p-6">
                        <div class="mb-4">
                            <label class="block text-sm font-medium mb-2">Daily paper cup usage</label>
                            <input type="range" id="usage-slider" min="1" max="10" value="2" class="w-full h-2 bg-neutral-600 rounded-lg appearance-none cursor-pointer"/>
                            <div class="flex justify-between text-sm text-gray-400 mt-1">
                                <span>1 cup</span>
                                <span>10 cups</span>
                            </div>
                        </div>
                        <div class="mt-6 p-4 bg-neutral-800 rounded-lg">
                            <p class="text-center text-lg">Your annual impact reduction:</p>
                            <div class="grid grid-cols-2 gap-4 mt-4 text-center">
                                <div>
                                    <p class="text-green-500 text-2xl font-bold" id="trees-saved">24</p>
                                    <p class="text-sm text-gray-400">Trees Saved</p>
                                </div>
                                <div>
                                    <p class="text-blue-500 text-2xl font-bold" id="plastic-reduced">730</p>
                                    <p class="text-sm text-gray-400">Cups Eliminated</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default SustainableAlternatives
