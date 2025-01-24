import React from 'react'

function HealthAwareness() {
  return (
    <div>
       <section id="health-awareness" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate__animated animate__fadeIn">
                <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Health Risks Awareness</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Understanding the potential health hazards associated with regular paper cup usage.</p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="bg-neutral-50 rounded-2xl p-8 shadow-lg animate__animated animate__fadeInLeft">
                    <div id="health-risks-carousel" class="relative">
                        <div class="carousel-items">
                            <div class="carousel-item active">
                                <div class="p-6 bg-white rounded-xl shadow-sm">
                                    <div class="flex items-center space-x-4 mb-4">
                                        <div class="bg-red-100 p-3 rounded-full">
                                            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                            </svg>
                                        </div>
                                        <h3 class="text-xl font-bold text-neutral-900">Chemical Exposure</h3>
                                    </div>
                                    <p class="text-gray-600">Paper cups contain harmful chemicals like BPA and phthalates that can leach into hot beverages.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center mt-4 space-x-2">
                            <button class="carousel-dot active w-3 h-3 rounded-full bg-neutral-300"></button>
                            <button class="carousel-dot w-3 h-3 rounded-full bg-neutral-300"></button>
                            <button class="carousel-dot w-3 h-3 rounded-full bg-neutral-300"></button>
                        </div>
                    </div>
                </div>

                <div class="space-y-6 animate__animated animate__fadeInRight">
                    <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                        <h3 class="text-xl font-bold text-neutral-900 mb-2">Carcinogenic Risks</h3>
                        <p class="text-gray-600">Prolonged exposure to chemicals in paper cups may increase cancer risks due to carcinogenic compounds.</p>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                        <h3 class="text-xl font-bold text-neutral-900 mb-2">Endocrine Disruption</h3>
                        <p class="text-gray-600">BPA and similar chemicals can interfere with hormone function and endocrine system regulation.</p>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                        <h3 class="text-xl font-bold text-neutral-900 mb-2">Reproductive Health</h3>
                        <p class="text-gray-600">Chemical exposure may impact reproductive health and fetal development in pregnant individuals.</p>
                    </div>
                </div>
            </div>

            <div class="mt-16 bg-neutral-50 rounded-2xl p-8 animate__animated animate__fadeIn">
                <div class="text-center mb-8">
                    <h3 class="text-2xl font-bold text-neutral-900 mb-4">Prevention Tips</h3>
                </div>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <div class="text-green-600 mb-4">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold mb-2">Use Reusable Cups</h4>
                        <p class="text-gray-600">Switch to stainless steel or glass containers for hot beverages.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <div class="text-green-600 mb-4">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold mb-2">Temperature Control</h4>
                        <p class="text-gray-600">Avoid extremely hot beverages in disposable cups to minimize chemical leaching.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <div class="text-green-600 mb-4">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold mb-2">Eco-Friendly Options</h4>
                        <p class="text-gray-600">Choose cups made from sustainable, chemical-free materials.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HealthAwareness
