import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

import { useWindowSize } from 'react-use'

function ActionTracker() {
  const [weeklyGoal, setWeeklyGoal] = useState(75);
  const [progressBarWidth, setProgressBarWidth] = useState(75);
  const [weeklyCups, setWeeklyCups] = useState(15);
  const [monthlyAverage, setMonthlyAverage] = useState(63);
  const [recentActions, setRecentActions] = useState([
    { type: 'Used Reusable Cup', location: 'Campus Café', time: '2 hours ago' },
    { type: 'Influenced Others', location: 'Student Center', time: '5 hours ago' },
    { type: 'Refused Disposable Cup', location: 'Library Café', time: '1 day ago' }
  ]);
  const { width, height } = useWindowSize()

  const [weeklyTracker, setWeeklyTracker] = useState([]);
  const [celebrate, setCelebrate] = useState(false); // To trigger confetti
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  // Populate weekly tracker on component mount
  useEffect(() => {
    const tracker = days.map((day, index) => ({
      day,
      completed: index < 5, // Assume the first 5 days are completed
    }));
    setWeeklyTracker(tracker);
  }, []);

  // Form submission handler for logging actions
  const handleLogAction = (e) => {
    e.preventDefault();
    const form = e.target;
    const actionType = form.actionType.value;
    const cupsSaved = parseInt(form.cupsSaved.value, 10);
    const location = form.location.value;

    // Calculate new progress and check if it reaches 100%
    const newProgress = Math.min(progressBarWidth + (cupsSaved * 5), 100);
    setProgressBarWidth(newProgress);
    setWeeklyCups((prev) => prev + cupsSaved);
    setMonthlyAverage((prev) => Math.floor((prev + cupsSaved) / 2));

    // Trigger confetti if goal is reached
    if (newProgress === 100 && !celebrate) {
      console.log("Confetti Triggered!"); // Debugging line
      setCelebrate(true); // Show confetti once
      setTimeout(() => setCelebrate(false), 5000); // Hide confetti after 5 seconds
    }

    // Simulate new action log
    setRecentActions((prevActions) => [
      ...prevActions,
      { type: actionType, location, time: 'Just Now' }
    ]);
  };

  return (
    <div>
      <section id="action-tracker" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Your Impact</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Monitor and visualize your contribution to reducing paper cup waste.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Personal Impact Dashboard */}
            <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInLeft h-fit">
              <h3 className="text-2xl font-bold mb-6">Personal Impact Dashboard</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Weekly Goal Progress</span>
                    <span className="text-green-500">{progressBarWidth}%</span>
                  </div>
                  <div className="w-full bg-neutral-700 rounded-full h-4">
                    <div
                      className={`bg-green-500 h-4 rounded-full transition-all duration-500 ${
                        progressBarWidth === 100 ? 'animate__animated animate__tada' : ''
                      }`}
                      style={{ width: `${progressBarWidth}%` }}
                    ></div>
                  </div>
                </div>

                {progressBarWidth === 100 && (
                  <div className="mt-4 text-center text-2xl text-green-400">
                    🎉 Congratulations! You've reached your goal! 🎉
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-700 rounded-lg p-4">
                    <h4 className="text-gray-300 text-sm mb-2">Cups Saved This Week</h4>
                    <p className="text-2xl font-bold">{weeklyCups}</p>
                  </div>
                  <div className="bg-neutral-700 rounded-lg p-4">
                    <h4 className="text-gray-300 text-sm mb-2">Monthly Average</h4>
                    <p className="text-2xl font-bold">{monthlyAverage}</p>
                  </div>
                </div>

                <div className="bg-neutral-700 rounded-lg p-4">
                  <h4 className="text-gray-300 text-sm mb-4">Daily Check-in</h4>
                  <div className="grid grid-cols-7 gap-2">
                    {weeklyTracker.map((entry, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xs text-gray-400 mb-1">{entry.day}</div>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            entry.completed ? 'bg-green-500' : 'bg-neutral-600'
                          }`}
                        >
                          {entry.completed && '✓'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Log Actions */}
            <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
              <h3 className="text-2xl font-bold mb-6">Log Your Actions</h3>
              <form id="action-log-form" className="space-y-6" onSubmit={handleLogAction}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Action Type</label>
                  <select
                    name="actionType"
                    className="w-full bg-neutral-700 border-neutral-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="Used Reusable Cup">Used Reusable Cup</option>
                    <option value="Refused Disposable Cup">Refused Disposable Cup</option>
                    <option value="Influenced Others">Influenced Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Number of Cups Saved</label>
                  <input
                    type="number"
                    name="cupsSaved"
                    className="w-full bg-neutral-700 border-neutral-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g., Campus Café"
                    className="w-full bg-neutral-700 border-neutral-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-all transform hover:scale-105"
                >
                  Log Action
                </button>
              </form>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Recent Actions</h4>
                <div className="space-y-4 overflow-y-auto max-h-40">
                  {recentActions.map((action, index) => (
                    <div key={index} className="bg-neutral-700 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium">{action.type}</h5>
                          <p className="text-sm text-gray-400">{action.location}</p>
                        </div>
                        <span className="text-xs text-gray-400">{action.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Confetti Celebration */}
        {celebrate &&  <Confetti 
          drawShape={ctx => {
            ctx.beginPath()
            for(let i = 0; i < 22; i++) {
              const angle = 0.35 * i
              const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
              const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
              ctx.lineTo(x, y)
            }
            ctx.stroke()
            ctx.closePath()
          }}
        
           width={width}
      height={height}/>}
         
        </div>
      </section>
    </div>
  );
}

export default ActionTracker;
