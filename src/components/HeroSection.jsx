import React from 'react'

function HeroSection() {
    return (
        <div>
            <section id="hero" className="bg-neutral-900 text-white min-h-[70vh] pt-16 flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20" id="el-5qkl6pkd"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="el-zw5aa3sf">
                    <div className="h-screen grid md:grid-cols-2 gap-12 items-center" id="el-3y0a4wk2">
                        <div className="animate__animated animate__fadeInLeft">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Rethink <span className="text-green-500">Paper Cups</span><br/>
                                    Reimagine Future
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mb-8">
                                Join the movement to combat the environmental and health risks of disposable paper cups through innovative tech solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#get-involved" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium text-center transition-all transform hover:scale-105">
                                    Join The Challenge
                                </a>
                                <a href="#impact-stats" className="border border-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-full font-medium text-center transition-all">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="animate__animated animate__fadeInRight">
                            <div className="relative">
                                <div className="bg-neutral-800 p-8 rounded-lg relative">
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="p-4">
                                            <h3 className="text-3xl font-bold text-green-500">500B+</h3>
                                            <p className="text-gray-400">Cups Disposed Yearly</p>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-3xl font-bold text-teal-500">20%</h3>
                                            <p className="text-gray-400">Annual Increase</p>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-3xl font-bold text-green-500">50yrs</h3>
                                            <p className="text-gray-400">Decomposition Time</p>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-3xl font-bold text-teal-500">100K+</h3>
                                            <p className="text-gray-400">Trees Cut Annually</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full" id="el-lsmvab3b">
                        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none" id="el-aghpgdyp">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" id="el-emn75lbh">

                            </svg>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
