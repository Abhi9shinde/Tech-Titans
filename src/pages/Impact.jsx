import React from 'react'

function Impact() {
  return (
    <div className='w-full'>
      <section id="impact_metrics" class="p-6">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
            <div class="bg-white rounded-lg border border-neutral-200/30 p-6">
                <h2 class="text-xl font-semibold text-neutral-800 mb-6">Global Impact Metrics</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-emerald-600">12,547</div>
                        <div class="text-sm text-neutral-600 mt-2">Cups Saved</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600">627kg</div>
                        <div class="text-sm text-neutral-600 mt-2">CO2 Reduced</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-purple-600">8,432L</div>
                        <div class="text-sm text-neutral-600 mt-2">Water Saved</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-yellow-600">₹62,735</div>
                        <div class="text-sm text-neutral-600 mt-2">Money Saved</div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg border border-neutral-200/30 p-6 mt-6">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-lg font-semibold text-neutral-800">Monthly Progress</h3>
                    <select class="bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm">
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                    </select>
                </div>
                <div class="h-64 flex items-end space-x-2">
                    <div class="flex-1 flex flex-col items-center">
                        <div class="w-full bg-emerald-100 rounded-t-lg" style={{"height": "40%"}}></div>
                        <span class="text-xs text-neutral-600 mt-2">Jul</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div class="w-full bg-emerald-100 rounded-t-lg" style={{"height": "65%"}}></div>
                        <span class="text-xs text-neutral-600 mt-2">Aug</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div class="w-full bg-emerald-100 rounded-t-lg" style={{"height": "85%"}}></div>
                        <span class="text-xs text-neutral-600 mt-2">Sep</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div class="w-full bg-emerald-100 rounded-t-lg" style={{"height": "75%"}}></div>
                        <span class="text-xs text-neutral-600 mt-2">Oct</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div class="w-full bg-emerald-100 rounded-t-lg" style={{"height": "90%"}}></div>
                        <span class="text-xs text-neutral-600 mt-2">Nov</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div class="w-full bg-emerald-100 rounded-t-lg" style={{"height": "95%"}}></div>
                        <span class="text-xs text-neutral-600 mt-2">Dec</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <div class="bg-white rounded-lg border border-neutral-200/30 p-6">
                <h3 class="text-lg font-semibold text-neutral-800 mb-4">Health Impact</h3>
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-sm text-neutral-600">BPA Exposure Reduced</span>
                            <span class="text-sm font-medium text-emerald-600">87%</span>
                        </div>
                        <div class="w-full bg-neutral-100 rounded-full h-2">
                            <div class="bg-emerald-500 h-2 rounded-full" style={{"width": "87%"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-sm text-neutral-600">Chemical Leaching Prevention</span>
                            <span class="text-sm font-medium text-emerald-600">92%</span>
                        </div>
                        <div class="w-full bg-neutral-100 rounded-full h-2">
                            <div class="bg-emerald-500 h-2 rounded-full" style={{"width": "92%"}}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg border border-neutral-200/30 p-6">
                <h3 class="text-lg font-semibold text-neutral-800 mb-4">Environmental Savings</h3>
                <div class="space-y-4">
                    <div class="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span class="text-sm text-neutral-700">Trees Preserved</span>
                        </div>
                        <span class="text-sm font-medium text-neutral-800">23</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span class="text-sm text-neutral-700">Water Saved (L)</span>
                        </div>
                        <span class="text-sm font-medium text-neutral-800">8,432</span>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span class="text-sm text-neutral-700">Plastic Reduced (kg)</span>
                        </div>
                        <span class="text-sm font-medium text-neutral-800">627</span>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg border border-neutral-200/30 p-6">
                <h3 class="text-lg font-semibold text-neutral-800 mb-4">Campus Goals Progress</h3>
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-neutral-600">Monthly Target</span>
                        <span class="text-sm font-medium text-emerald-600">82% Complete</span>
                    </div>
                    <div class="w-full bg-neutral-100 rounded-full h-2">
                        <div class="bg-emerald-500 h-2 rounded-full" style={{"width": "82%"}}></div>
                    </div>
                    <div class="text-xs text-neutral-500 mt-2">
                        18% remaining to reach the monthly goal of 15,000 cups
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Impact
