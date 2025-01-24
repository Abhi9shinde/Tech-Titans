import React from 'react'

function ActionTracker() {
    // Populate weekly tracker
function populateWeeklyTracker() {
    const weeklyTracker = document.getElementById('weekly-tracker');
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    
    weeklyTracker.innerHTML = days.map((day, index) => `
        <div class="text-center">
            <div class="text-xs text-gray-400 mb-1">${day}</div>
            <div class="w-8 h-8 rounded-full flex items-center justify-center ${index < 5 ? 'bg-green-500' : 'bg-neutral-600'}">${index < 5 ? '✓' : ''}</div>
        </div>
    `).join('');
}

// Populate recent actions
function populateRecentActions() {
    const recentActions = document.getElementById('recent-actions');
    const actions = [
        { type: 'Used Reusable Cup', location: 'Campus Café', time: '2 hours ago' },
        { type: 'Influenced Others', location: 'Student Center', time: '5 hours ago' },
        { type: 'Refused Disposable Cup', location: 'Library Café', time: '1 day ago' }
    ];

    recentActions.innerHTML = actions.map(action => `
        <div class="bg-neutral-700 rounded-lg p-4">
            <div class="flex justify-between items-start">
                <div>
                    <h5 class="font-medium">${action.type}</h5>
                    <p class="text-sm text-gray-400">${action.location}</p>
                </div>
                <span class="text-xs text-gray-400">${action.time}</span>
            </div>
        </div>
    `).join('');
}

// Form submission handler
document.getElementById('action-log-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add animation to progress bar
    const progressBar = document.getElementById('goal-progress-bar');
    const currentWidth = parseInt(progressBar.style.width);
    const newWidth = Math.min(currentWidth + 5, 100);
    progressBar.style.width = `${newWidth}%`;
    document.getElementById('goal-percentage').textContent = `${newWidth}%`;
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateWeeklyTracker();
    populateRecentActions();
});
  return (
    <div>
       <section id="action-tracker" class="py-20 bg-neutral-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate__animated animate__fadeIn">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Track Your Impact</h2>
                <p class="text-lg text-gray-300 max-w-2xl mx-auto">Monitor and visualize your contribution to reducing paper cup waste.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12">
                <div class="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInLeft">
                    <h3 class="text-2xl font-bold mb-6">Personal Impact Dashboard</h3>
                    <div class="space-y-6">
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-300">Weekly Goal Progress</span>
                                <span class="text-green-500" id="goal-percentage">75%</span>
                            </div>
                            <div class="w-full bg-neutral-700 rounded-full h-4">
                                <div class="bg-green-500 h-4 rounded-full transition-all duration-500" style="width: 75%" id="goal-progress-bar"></div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-neutral-700 rounded-lg p-4">
                                <h4 class="text-gray-300 text-sm mb-2">Cups Saved This Week</h4>
                                <p class="text-2xl font-bold" id="weekly-cups">15</p>
                            </div>
                            <div class="bg-neutral-700 rounded-lg p-4">
                                <h4 class="text-gray-300 text-sm mb-2">Monthly Average</h4>
                                <p class="text-2xl font-bold" id="monthly-average">63</p>
                            </div>
                        </div>

                        <div class="bg-neutral-700 rounded-lg p-4">
                            <h4 class="text-gray-300 text-sm mb-4">Daily Check-in</h4>
                            <div class="grid grid-cols-7 gap-2" id="weekly-tracker">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
                    <h3 class="text-2xl font-bold mb-6">Log Your Actions</h3>
                    <form id="action-log-form" class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-2">Action Type</label>
                            <select class="w-full bg-neutral-700 border-neutral-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500">
                                <option value="reusable">Used Reusable Cup</option>
                                <option value="refused">Refused Disposable Cup</option>
                                <option value="influenced">Influenced Others</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-2">Number of Cups Saved</label>
                            <input type="number" min="1" value="1" class="w-full bg-neutral-700 border-neutral-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"/>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-2">Location</label>
                            <input type="text" placeholder="e.g., Campus Café" class="w-full bg-neutral-700 border-neutral-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"/>
                        </div>

                        <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-all transform hover:scale-105">
                            Log Action
                        </button>
                    </form>

                    <div class="mt-8">
                        <h4 class="text-xl font-bold mb-4">Recent Actions</h4>
                        <div class="space-y-4" id="recent-actions">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ActionTracker
