import React, { useEffect } from 'react'

function Risk() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='border-t border-neutral-800'>
            <section id="environmental-risks" className="py-20 bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-12">Environmental Risks</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Understanding the severe environmental impact of disposable paper cups on our planet.</p>
                    </div>
                    <div className='border-t border-neutral-800 mb-20'></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        <a href="https://oceanservice.noaa.gov/facts/microplastics.html" target="_blank" className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
                            <div className="bg-red-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Microplastic Pollution</h3>
                            <p className="text-gray-400">Paper cups contribute significantly to microplastic pollution due to their plastic lining, typically made of polyethylene, which does not decompose naturally. Over time, this lining breaks down into tiny microplastic particles that infiltrate soil and water systems, posing severe risks to ecosystems. These microplastics can leach harmful chemicals, contaminating groundwater and affecting plant growth.</p>
                            <div className="flex justify-end mt-4">
                                <svg className="w-6 h-6 text-red-500 hover:text-red-700 transition-all duration-300 mt-18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                        </a>

                        <a href="https://pachamama.org/effects-of-deforestation" target="_blank" className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animationDelay": "0.2s" }}>
                            <div className="bg-yellow-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Deforestation Impact</h3>
                            <p className="text-gray-400">The production of paper cups drives large-scale deforestation, as millions of trees are cut down annually to meet the growing demand for single-use items. This widespread deforestation disrupts ecosystems, destroying habitats for countless plant and animal species, and significantly reduces biodiversity. Forests play a crucial role in absorbing carbon dioxide and regulating the Earth's climate; their loss contributes to increased greenhouse gas emissions, accelerating global warming.</p>
                            <div className="flex justify-end mt-4">
                                <svg className="w-6 h-6 text-yellow-500 hover:text-yellow-700 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                        </a>


                        <a href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/#:~:text=A%20carbon%20footprint%20is%20the,highest%20rates%20in%20the%20world." target="_blank" className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animationDelay": "0.4s" }}>
                            <div className="bg-blue-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Carbon Footprint</h3>
                            <p className="text-gray-400">The lifecycle of paper cups, from production to disposal, leaves a considerable carbon footprint. Manufacturing these cups involves energy-intensive processes, including harvesting timber, pulping, and adding a plastic lining, all of which require significant fossil fuel consumption. Additionally, the transportation of raw materials to factories and the distribution of finished cups to retailers further contribute to greenhouse gas emissions.</p>
                            <div className="flex justify-end mt-4">
                                <svg className="w-6 h-6 text-blue-500 hover:text-blue-700 transition-all duration-300 mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                        </a>


                        <a href="https://www.repsol.com/en/energy-and-the-future/future-of-the-world/energy-consumption/index.cshtml#:~:text=Energy%20consumption%20is%20the%20total,diesel%2C%20oil%2C%20and%20biomass." target="_blank" className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animationDelay": "0.6s" }}>
                            <div className="bg-green-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Energy Consumption</h3>
                            <p className="text-gray-400">The production of paper cups demands substantial energy at every stage of their lifecycle, placing a heavy burden on natural resources and contributing to environmental pollution. Energy-intensive processes, such as logging, transporting timber, and converting it into paper pulp, consume large quantities of fossil fuels. Adding the plastic lining, which is derived from petroleum, further escalates energy consumption. Additionally, the machinery used in manufacturing and the energy required to operate factories amplify the environmental impact.</p>
                            <div className="flex justify-end mt-4">
                                <svg className="w-6 h-6 text-green-500 hover:text-green-700 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                        </a>


                        <a href="https://www.nrdc.org/stories/water-pollution-everything-you-need-know" target="_blank" className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animationDelay": "0.8s" }}>
                            <div className="bg-purple-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Water Pollution</h3>
                            <p className="text-gray-400">The manufacturing of paper cups involves chemical treatments and coating processes that often result in harmful runoff, contaminating nearby water sources. During production, chemicals such as bleach, dyes, and coatings are used to process the paper pulp and create the plastic lining, all of which can seep into the water system if not properly managed. When these chemicals reach rivers, lakes, or oceans, they disrupt aquatic ecosystems, harming fish and other marine life.</p>
                            <div className="flex justify-end mt-4">
                                <svg className="w-6 h-6 text-purple-500 hover:text-purple-700 transition-all duration-300 mt-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                        </a>


                        <a href="https://www.activesustainability.com/environment/landfills-serious-problem-environment/" target="_blank" className="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ "animationDelay": "1s" }}>
                            <div className="bg-teal-500/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Landfill Impact</h3>
                            <p className="text-gray-400">The non-biodegradable plastic lining in paper cups is one of the primary contributors to the growing landfill crisis. While the outer layer of the cup may appear to be paper, it is typically coated with polyethylene or other plastic materials to make it waterproof, which prevents it from breaking down naturally in the environment. As a result, paper cups do not decompose easily in landfills, taking up valuable space for decades. The accumulation of these cups, along with other single-use plastics, exacerbates the global waste crisis.</p>
                            <div className="flex justify-end mt-4">
                                <svg className="w-6 h-6 text-teal-500 hover:text-teal-700 transition-all duration-300 mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                        </a>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Risk
