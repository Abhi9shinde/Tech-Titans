import React from 'react'
import logo from '../../public/logo.avif'
function Navbar() {
  return (
    <div>
       <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-pbwu9sf6">
            <div className="flex items-center justify-between h-16" id="el-loeoty7l">
                <div className="flex items-center" id="el-qy4zsjvr">
                    <div className="flex-shrink-0 flex gap-2 items-center" >
                        <img src={logo} alt="logo" className='w-8 h-8 rounded-full' />
                        <span className="text-xl font-bold" id="el-kcx0eyss">EcoCup</span>
                    </div>
                </div>
                
                <div className="hidden md:block" id="el-rng5a5e9">
                    <div className="ml-10 flex items-baseline space-x-4" id="el-1njepdcv">
                        <a href="#hero" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium transition-all" id="el-kfw9yd36">Home</a>
                        <a href="#impact-stats" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium transition-all" id="el-8z2m6915">Impact</a>
                        <a href="#environmental-risks" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium transition-all" id="el-h2r1yv2a">Risks</a>
                        <a href="#health-awareness" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium transition-all" id="el-k7h2q64n">Health</a>
                        <a href="#sustainable-alternatives" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium transition-all" id="el-9iza32kr">Solutions</a>
                        <a href="#community-dashboard" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium transition-all" id="el-1fdwo1a9">Community</a>
                        <a href="#get-involved" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition-all" id="el-0jn4yxs2">Get Involved</a>
                    </div>
                </div>

                <div className="md:hidden" id="el-sjhfge08">
                    <button id="mobile-menu-button" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-neutral-700 focus:outline-none" aria-label="Main menu">
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" id="el-a55wo6hn">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" id="el-r4q2k267"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu" className="hidden md:hidden bg-neutral-900">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" id="el-yu41vdhc">
                <a href="#hero" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium transition-all" id="el-3ir1pn1v">Home</a>
                <a href="#impact-stats" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium transition-all" id="el-3q3y81cr">Impact</a>
                <a href="#environmental-risks" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium transition-all" id="el-qsd5zl1k">Risks</a>
                <a href="#health-awareness" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium transition-all" id="el-zfz7egxy">Health</a>
                <a href="#sustainable-alternatives" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium transition-all" id="el-7cdz5mgv">Solutions</a>
                <a href="#community-dashboard" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium transition-all" id="el-0jq771vy">Community</a>
                <a href="#get-involved" className="block bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-base font-medium transition-all mt-4" id="el-9i7tip88">Get Involved</a>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
