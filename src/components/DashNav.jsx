
import React from 'react'
import logo from '/logo.avif';
function DashNav() {
    return (
        <div>
            <div class="sticky top-0 z-10 bg-white border-b border-neutral-200/20 px-6 py-4" id="el-zbtsvgpr">
                <div class="flex items-center justify-between" id="el-p6rsvhy0">
                    <div className="flex items-center">
                    <a href="/">
                        <div className="flex-shrink-0 flex gap-2 items-center">
                            <img src={logo} alt="EcoCup logo" className="w-8 h-8 rounded-full" />
                            <span className="text-xl font-bold">EcoCup</span>
                        </div>
                        </a>
                    </div>
                    <div class="flex items-center space-x-4" id="el-sxrpoc17">
                        <button class="p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg" id="el-cn56tlf4">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-5nx8tszy">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" id="el-ab7tnvs2"></path>
                            </svg>
                        </button>
                        <button class="p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg" id="el-9o0eq6v3">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-37k8qplt">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" id="el-9zosl0rf"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" id="el-yx5fcflx"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashNav
