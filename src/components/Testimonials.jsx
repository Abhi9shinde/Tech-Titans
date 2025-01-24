import React from 'react'

function Testimonials() {
  return (
    <div>
      <section id="testimonials" class="py-20 bg-neutral-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate__animated animate__fadeIn">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Community Voices</h2>
                <p class="text-lg text-gray-300 max-w-2xl mx-auto">Hear from members who are making a difference in our sustainable journey.</p>
            </div>

            <div class="relative" x-data="{ activeSlide: 1 }">
                <div class="overflow-hidden relative">
                    <div class="flex transition-transform duration-500" id="testimonial-container">
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-neutral-50 rounded-xl p-8 shadow-lg animate__animated animate__fadeIn">
                                <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    <div class="flex-shrink-0">
                                        <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-gray-600 italic mb-4">"Switching to reusable cups was easier than I thought. The app's tracking feature helps me see my environmental impact, and it's incredibly motivating!"</p>
                                        <div>
                                            <h4 class="font-bold text-neutral-900">Sarah Chen</h4>
                                            <p class="text-gray-500">Environmental Science Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-neutral-50 rounded-xl p-8 shadow-lg animate__animated animate__fadeIn">
                                <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    <div class="flex-shrink-0">
                                        <div class="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                                            <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-gray-600 italic mb-4">"As a café owner, implementing the smart cup program has not only reduced our waste but also attracted environmentally conscious customers."</p>
                                        <div>
                                            <h4 class="font-bold text-neutral-900">Michael Rodriguez</h4>
                                            <p class="text-gray-500">Local Café Owner</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-neutral-50 rounded-xl p-8 shadow-lg animate__animated animate__fadeIn">
                                <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    <div class="flex-shrink-0">
                                        <div class="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                                            <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-gray-600 italic mb-4">"The gamification aspect makes sustainability fun! Competing with friends to reduce cup waste has become our daily challenge."</p>
                                        <div>
                                            <h4 class="font-bold text-neutral-900">Emma Thompson</h4>
                                            <p class="text-gray-500">Community Leader</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none" id="prev-testimonial">
                    <svg class="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none" id="next-testimonial">
                    <svg class="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

                <div class="flex justify-center mt-8 space-x-2">
                    <button class="w-3 h-3 rounded-full bg-neutral-900 transition-all duration-300" data-slide="1"></button>
                    <button class="w-3 h-3 rounded-full bg-neutral-300 transition-all duration-300" data-slide="2"></button>
                    <button class="w-3 h-3 rounded-full bg-neutral-300 transition-all duration-300" data-slide="3"></button>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Testimonials
