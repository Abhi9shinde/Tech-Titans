import React, { useEffect, useState } from 'react';

function HealthAwareness() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselItems = [
        {
            title: "Chemical Exposure",
            content: "Paper cups contain harmful chemicals like BPA and phthalates that can leach into hot beverages."
        },
        {
            title: "Temperature Impact",
            content: "Hot liquids increase the rate of chemical leaching from paper cup linings."
        },
        {
            title: "Long-term Effects",
            content: "Regular exposure to these chemicals may lead to various health complications."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="health-awareness" className="py-20 bg-neutral-900 text-white border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Health Risks Awareness</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Understanding the potential health hazards associated with regular paper cup usage.
                    </p>
                </div>

                {/* Carousel */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-neutral-800 rounded-2xl p-8 shadow-lg animate__animated animate__fadeInLeft">
                        <div id="health-risks-carousel" className="relative">
                            <div className="carousel-item p-6 bg-neutral-900 rounded-xl shadow-sm">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="bg-red-100 p-3 rounded-full">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold ">{carouselItems[currentSlide].title}</h3>
                                </div>
                                <p className="text-gray-400">{carouselItems[currentSlide].content}</p>
                            </div>

                            {/* Carousel Dots */}
                            <div className="flex justify-center mt-4 space-x-2">
                                {carouselItems.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`carousel-dot w-3 h-3 rounded-full ${index === currentSlide ? 'bg-neutral-500' : 'bg-neutral-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Health Risk Cards */}
                    <div className="space-y-6 animate__animated animate__fadeInRight">
                        {[
                            { title: "Carcinogenic Risks", content: "Prolonged exposure to chemicals in paper cups may increase cancer risks due to carcinogenic compounds.", borderColor: "border-red-500" },
                            { title: "Endocrine Disruption", content: "BPA and similar chemicals can interfere with hormone function and endocrine system regulation.", borderColor: "border-orange-500" },
                            { title: "Reproductive Health", content: "Chemical exposure may impact reproductive health and fetal development in pregnant individuals.", borderColor: "border-yellow-500" },
                        ].map((risk, index) => (
                            <div key={index} className={`bg-neutral-800 p-6 rounded-xl shadow-lg border-l-4 ${risk.borderColor}`}>
                                <h3 className="text-xl font-bold  mb-2">{risk.title}</h3>
                                <p className="text-gray-400">{risk.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Prevention Tips */}
                <div className="mt-16 bg-neutral-800 rounded-2xl p-8 animate__animated animate__fadeIn">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold  mb-4">Prevention Tips</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Use Reusable Cups", content: "Switch to stainless steel or glass containers for hot beverages.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { title: "Temperature Control", content: "Avoid extremely hot beverages in disposable cups to minimize chemical leaching.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                            { title: "Eco-Friendly Options", content: "Choose cups made from sustainable, chemical-free materials.", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
                        ].map((tip, index) => (
                            <div key={index} className="bg-neutral-900 p-6 rounded-xl shadow-sm">
                                <div className="text-green-600 mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tip.icon}></path>
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold mb-2">{tip.title}</h4>
                                <p className="text-gray-600">{tip.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HealthAwareness;
