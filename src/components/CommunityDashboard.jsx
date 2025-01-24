import React from 'react'
function CommunityDashboard() {
    
// function updateCounters() {
//     const counters = {
//         'active-members-count': {start: 2547, increment: 1},
//         'cups-saved-count': {start: 157892, increment: 5},
//         'co2-reduced-count': {start: 5234, increment: 2},
//         'points-earned-count': {start: 892547, increment: 10}
//     };

//     Object.entries(counters).forEach(([id, values]) => {
//         const element = document.getElementById(id);
//         if (element) {
//             const currentValue = parseInt(element.textContent.replace(/[^0-9]/g, ''));
//             element.textContent = id === 'co2-reduced-count' 
//                 ? `${(currentValue + values.increment).toLocaleString()} kg`
//                 : (currentValue + values.increment).toLocaleString();
//         }
//     });
// }

// // Populate leaderboard
// function populateLeaderboard() {
//     const leaderboardData = [
//         {rank: 1, name: "Sarah Chen", cupsSaved: 432, points: 12460, status: "Eco Warrior"},
//         {rank: 2, name: "Mike Johnson", cupsSaved: 385, points: 11234, status: "Sustainability Pro"},
//         {rank: 3, name: "Emma Williams", cupsSaved: 347, points: 10123, status: "Green Champion"},
//         {rank: 4, name: "David Kim", cupsSaved: 321, points: 9876, status: "Eco Enthusiast"},
//         {rank: 5, name: "Lisa Garcia", cupsSaved: 298, points: 8654, status: "Green Starter"}
//     ];

//     const tbody = document.getElementById('leaderboard-body');
//     tbody.innerHTML = leaderboardData.map(entry => `
//         <tr class="hover:bg-neutral-50">
//             <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">#${entry.rank}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">${entry.name}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">${entry.cupsSaved}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">${entry.points}</td>
//             <td class="px-6 py-4 whitespace-nowrap">
//                 <span class="px-2 py-1 text-xs font-semibold rounded-full ${entry.rank === 1 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}">${entry.status}</span>
//             </td>
//         </tr>
//     `).join('');
// }

// // Initialize dashboard
// document.addEventListener('DOMContentLoaded', () => {
//     populateLeaderboard();
//     setInterval(updateCounters, 3000);
// });
  return (
    <div>
      <section id="community-dashboard" class="py-20 bg-neutral-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate__animated animate__fadeIn">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Community Dashboard</h2>
                <p class="text-lg text-gray-300 max-w-2xl mx-auto">Track our collective impact and progress towards a sustainable future.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div class="bg-neutral-50 rounded-xl p-6 shadow-lg animate__animated animate__fadeInUp">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold text-neutral-900">Active Members</h3>
                        <div class="bg-green-100 p-2 rounded-full">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-3xl font-bold text-neutral-900" id="active-members-count">2,547</p>
                    <p class="text-green-600 text-sm mt-2">↑ 12% from last month</p>
                </div>

                <div class="bg-neutral-50 rounded-xl p-6 shadow-lg animate__animated animate__fadeInUp" style={{"animation-delay": "0.2s"}}>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold text-neutral-900">Cups Saved</h3>
                        <div class="bg-blue-100 p-2 rounded-full">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-3xl font-bold text-neutral-900" id="cups-saved-count">157,892</p>
                    <p class="text-blue-600 text-sm mt-2">↑ 25% from last month</p>
                </div>

                <div class="bg-neutral-50 rounded-xl p-6 shadow-lg animate__animated animate__fadeInUp" style={{"animation-delay": "0.4s"}}>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold text-neutral-900">CO₂ Reduced</h3>
                        <div class="bg-teal-100 p-2 rounded-full">
                            <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-3xl font-bold text-neutral-900" id="co2-reduced-count">5,234 kg</p>
                    <p class="text-teal-600 text-sm mt-2">↑ 18% from last month</p>
                </div>

                <div class="bg-neutral-50 rounded-xl p-6 shadow-lg animate__animated animate__fadeInUp" style={{"animation-delay": "0.6s"}}>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold text-neutral-900">Points Earned</h3>
                        <div class="bg-purple-100 p-2 rounded-full">
                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <p class="text-3xl font-bold text-neutral-900" id="points-earned-count">892,547</p>
                    <p class="text-purple-600 text-sm mt-2">↑ 15% from last month</p>
                </div>
            </div>

            <div class="bg-neutral-50 rounded-xl p-8 shadow-lg animate__animated animate__fadeIn">
                <h3 class="text-2xl font-bold text-neutral-900 mb-6">Community Leaderboard</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr class="bg-neutral-100">
                                <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Rank</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Member</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Cups Saved</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Points</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white" id="leaderboard-body">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default CommunityDashboard
