import React from 'react'

function Leaderboard() {
  return (
    <div className='w-full'>
      <section id="leaderboard" class="p-6 w-full">
    <div class="bg-white rounded-lg border border-neutral-200/30">
        <div class="p-6">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <h2 class="text-xl font-semibold text-neutral-800">Sustainability Champions</h2>
                <div class="flex flex-wrap gap-2">
                    <button class="px-4 py-2 text-sm bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors">
                        This Week
                    </button>
                    <button class="px-4 py-2 text-sm bg-neutral-100 text-neutral-600 rounded-lg hover:bg-neutral-200 transition-colors">
                        This Month
                    </button>
                    <button class="px-4 py-2 text-sm bg-neutral-100 text-neutral-600 rounded-lg hover:bg-neutral-200 transition-colors">
                        All Time
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="relative flex flex-col items-center p-6 bg-neutral-50 rounded-lg md:transform md:-translate-y-4">
                    <div class="w-16 h-16 bg-neutral-200 rounded-full mb-4"></div>
                    <span class="text-2xl font-bold text-neutral-600 mb-1">2nd</span>
                    <h3 class="text-lg font-medium text-neutral-800">Emma Wilson</h3>
                    <p class="text-neutral-600 mb-2">428 Cups Saved</p>
                    <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Eco Warrior</span>
                </div>

                <div class="relative flex flex-col items-center p-6 bg-emerald-50 rounded-lg md:transform md:-translate-y-8">
                    <div class="w-20 h-20 bg-emerald-200 rounded-full mb-4"></div>
                    <span class="text-3xl font-bold text-emerald-600 mb-1">1st</span>
                    <h3 class="text-xl font-medium text-neutral-800">John Smith</h3>
                    <p class="text-neutral-600 mb-2">567 Cups Saved</p>
                    <span class="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">Green Champion</span>
                </div>

                <div class="relative flex flex-col items-center p-6 bg-neutral-50 rounded-lg">
                    <div class="w-16 h-16 bg-neutral-200 rounded-full mb-4"></div>
                    <span class="text-2xl font-bold text-neutral-600 mb-1">3rd</span>
                    <h3 class="text-lg font-medium text-neutral-800">Alex Chen</h3>
                    <p class="text-neutral-600 mb-2">392 Cups Saved</p>
                    <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Eco Warrior</span>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr class="border-b border-neutral-200/30">
                            <th class="px-4 py-3 text-left text-sm font-medium text-neutral-600">Rank</th>
                            <th class="px-4 py-3 text-left text-sm font-medium text-neutral-600">User</th>
                            <th class="px-4 py-3 text-left text-sm font-medium text-neutral-600">Cups Saved</th>
                            <th class="px-4 py-3 text-left text-sm font-medium text-neutral-600">CO2 Reduced</th>
                            <th class="px-4 py-3 text-left text-sm font-medium text-neutral-600">Achievements</th>
                            <th class="px-4 py-3 text-left text-sm font-medium text-neutral-600">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-neutral-200/30">
                            <td class="px-4 py-4 text-sm text-neutral-600">#4</td>
                            <td class="px-4 py-4">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 bg-neutral-200 rounded-full mr-3"></div>
                                    <div>
                                        <p class="text-sm font-medium text-neutral-800">Sarah Johnson</p>
                                        <p class="text-xs text-neutral-500">Engineering</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm text-neutral-600">347</td>
                            <td class="px-4 py-4 text-sm text-neutral-600">17.35kg</td>
                            <td class="px-4 py-4">
                                <div class="flex flex-wrap gap-1">
                                    <span class="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">Weekly Star</span>
                                    <span class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Consistent</span>
                                </div>
                            </td>
                            <td class="px-4 py-4">
                                <span class="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full">Active</span>
                            </td>
                        </tr>
                        <tr class="border-b border-neutral-200/30">
                            <td class="px-4 py-4 text-sm text-neutral-600">#5</td>
                            <td class="px-4 py-4">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 bg-neutral-200 rounded-full mr-3"></div>
                                    <div>
                                        <p class="text-sm font-medium text-neutral-800">Michael Brown</p>
                                        <p class="text-xs text-neutral-500">Business</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 py-4 text-sm text-neutral-600">312</td>
                            <td class="px-4 py-4 text-sm text-neutral-600">15.60kg</td>
                            <td class="px-4 py-4">
                                <div class="flex flex-wrap gap-1">
                                    <span class="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Rising Star</span>
                                </div>
                            </td>
                            <td class="px-4 py-4">
                                <span class="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full">Active</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Leaderboard
