import React from 'react'

function Impact() {
    return (
        <div className='w-full'>
            <section id="impact_metrics" className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="bg-neutral-800 rounded-lg border border-neutral-200/30 p-6">
                            <h2 className="text-xl font-semibold text-white mb-6">Global Impact Metrics</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-emerald-600">135</div>
                                    <div className="text-sm text-neutral-400 mt-2">Cups Saved</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">627kg</div>
                                    <div className="text-sm text-neutral-400 mt-2">CO2 Reduced</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600">8,432L</div>
                                    <div className="text-sm text-neutral-400 mt-2">Water Saved</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-600">₹62,735</div>
                                    <div className="text-sm text-neutral-400 mt-2">Money Saved</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg border border-neutral-200/30 p-6 mt-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold text-white">Monthly Progress</h3>
                                <select className="bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm">
                                    <option>Last 6 Months</option>
                                    <option>Last Year</option>
                                </select>
                            </div>
                            <div className="h-64 flex items-end space-x-2">
                            {[
                { day: 'Jan', height: '60%' },
                { day: 'Feb', height: '80%' },
                { day: 'March', height: '40%' },
                { day: 'April', height: '70%' },
                { day: 'May', height: '90%' },
                { day: 'June', height: '50%' },
              ].map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                  {/* Use inline style for dynamic height */}
                  <div className="bg-emerald-400 rounded-t-lg w-20" style={{ height: day.height }}></div>
                  {/* Optionally, you can show the day label */}
                  <span className="text-sm text-neutral-400 mt-2">{day.day}</span>
                </div>
              ))}
                             
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-neutral-800 rounded-lg border border-neutral-200/30 p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Health Impact</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-neutral-400">BPA Exposure Reduced</span>
                                        <span className="text-sm font-medium text-emerald-600">87%</span>
                                    </div>
                                    <div className="w-full bg-neutral-100 rounded-full h-2">
                                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "87%" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-neutral-400">Chemical Leaching Prevention</span>
                                        <span className="text-sm font-medium text-emerald-600">92%</span>
                                    </div>
                                    <div className="w-full bg-neutral-100 rounded-full h-2">
                                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg border border-neutral-200/30 p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Environmental Savings</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-neutral-700">Trees Preserved</span>
                                    </div>
                                    <span className="text-sm font-medium text-neutral-800">23</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-neutral-700">Water Saved (L)</span>
                                    </div>
                                    <span className="text-sm font-medium text-neutral-800">8,432</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-neutral-700">Plastic Reduced (kg)</span>
                                    </div>
                                    <span className="text-sm font-medium text-neutral-800">627</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-lg border border-neutral-200/30 p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Monthly Goals Progress</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-neutral-400">Monthly Target</span>
                                    <span className="text-sm font-medium text-emerald-600">82% Complete</span>
                                </div>
                                <div className="w-full bg-neutral-100 rounded-full h-2">
                                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                                </div>
                                <div className="text-xs text-neutral-400 mt-2">
                                    18% remaining to reach the monthly goal of 150 cups
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Impact;
