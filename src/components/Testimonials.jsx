import React, { useState, useEffect } from 'react';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  useEffect(() => {
    const intervalId = setInterval(() => updateSlide('next'), 5000);
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const updateSlide = (direction) => {
    setCurrentSlide((prevSlide) => {
      if (direction === 'next') {
        return (prevSlide % totalSlides) + 1;
      } else {
        return (prevSlide - 2 + totalSlides) % totalSlides + 1;
      }
    });
  };

  const updateDots = (index) => {
    return currentSlide === index ? 'bg-neutral-900' : 'bg-neutral-300';
  };

  return (
    <div>
      <section id="testimonials" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Community Voices</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Hear from members who are making a difference in our sustainable journey.</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
              >
                {/* Testimonial 1 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-neutral-800 rounded-xl p-8 shadow-lg animate__animated animate__fadeIn">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-200 italic mb-4">
                          "Switching to reusable cups was easier than I thought. The app's tracking feature helps me see my environmental impact, and it's incredibly motivating!"
                        </p>
                        <div>
                          <h4 className="font-bold text-neutral-400">Sarah Chen</h4>
                          <p className="text-gray-500">Environmental Science Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-neutral-800 rounded-xl p-8 shadow-lg animate__animated animate__fadeIn">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-200 italic mb-4">
                          "As a café owner, implementing the smart cup program has not only reduced our waste but also attracted environmentally conscious customers."
                        </p>
                        <div>
                          <h4 className="font-bold text-neutral-400">Michael Rodriguez</h4>
                          <p className="text-gray-500">Local Café Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-neutral-800 rounded-xl p-8 shadow-lg animate__animated animate__fadeIn">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-200 italic mb-4">
                          "The gamification aspect makes sustainability fun! Competing with friends to reduce cup waste has become our daily challenge."
                        </p>
                        <div>
                          <h4 className="font-bold text-neutral-400">Emma Thompson</h4>
                          <p className="text-gray-500">Community Leader</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
              onClick={() => updateSlide('prev')}
            >
              <svg
                className="w-6 h-6 text-neutral-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
              onClick={() => updateSlide('next')}
            >
              <svg
                className="w-6 h-6 text-neutral-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Dots for slide navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {[1, 2, 3].map((index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${updateDots(index)}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
