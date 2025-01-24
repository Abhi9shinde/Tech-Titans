import React from 'react';

function Overview() {
  return (
    <div className="w-full">
      <section id="overview" className="p-6 overflow-y-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Impact Card */}
          <div className="bg-neutral-800 p-6 rounded-lg ">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Total Impact</h3>
              <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">
                Last 30 days
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Cups Saved', value: '135' },
                { label: 'CO2 Reduced', value: '12kg' },
                { label: 'trees Saved', value: '78' },
                { label: 'Challenges Won', value: '4' },
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-sm text-neutral-300">{item.label}</p>
                  <p className="text-2xl font-bold text-white">{item.value}+</p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Challenge Card */}
          <div className="bg-neutral-800 p-6 rounded-lg ">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Active Challenge</h3>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                5 days left
              </span>
            </div>
            <h4 className="text-neutral-200 font-medium mb-2">Zero Cup November</h4>
            <p className="text-sm text-neutral-400 mb-4">
              Use reusable cups for all beverages this month.
            </p>
            <div className="w-full bg-neutral-100 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Progress: 75%</span>
              <span className="text-neutral-400">Goal: 100%</span>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-neutral-800 p-6 rounded-lg ">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3 text-white">
              {[
                {
                  label: 'Log Reusable Cup Usage',
                  color: 'emerald',
                  iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
                },
                {
                  label: 'Join New Challenge',
                  color: 'blue',
                  iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                },
                {
                  label: 'Invite Friends',
                  color: 'purple',
                  iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                },
              ].map((action, index) => (
                <button
                  key={index}
                  className={`w-full bg-${action.color}-50 text-${action.color}-700 px-4 py-3 rounded-lg text-left flex items-center hover:bg-${action.color}-100 transition-colors`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={action.iconPath}></path>
                  </svg>
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Weekly Usage Statistics */}

          <div className="md:col-span-2 lg:col-span-2 bg-neutral-800 p-6 rounded-lg ">
            <h3 className="text-lg font-semibold text-white mb-4">Weekly Usage Statistics</h3>
            <div className="h-64 flex items-end justify-between space-x-2 overflow-hidden">
              {[
                { day: 'Mon', height: '60%' },
                { day: 'Tue', height: '80%' },
                { day: 'Wed', height: '40%' },
                { day: 'Thu', height: '70%' },
                { day: 'Fri', height: '90%' },
                { day: 'Sat', height: '50%' },
                { day: 'Sun', height: '30%' },
              ].map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="bg-emerald-400 rounded-t-lg w-20" style={{ height: day.height }}></div>
                  <span className="text-sm text-neutral-400 mt-2">{day.day}</span>
                </div>
              ))}
            </div>
          </div>


          {/* Environmental Impact */}
          <div className="lg:col-span-1 bg-neutral-800 p-6 rounded-lg">
  <h3 className="text-lg font-semibold text-white mb-4">Environmental Impact</h3>
  
  {[ 
    { label: 'Trees Saved', value: '120', width: '65%', color: 'green' },
    { label: 'Water Saved (L)', value: '42', width: '75%', color: 'blue' },
    { label: 'Plastic Reduced (kg)', value: '28.5', width: '45%', color: 'purple' }
  ].map((impact, index) => (
    <div key={index} className="mb-4">
      {/* Label and Value Section */}
      <div className="flex justify-between mb-2">
        <span className="text-sm text-neutral-400">{impact.label}</span>
        <span className="text-sm font-medium text-neutral-400">{impact.value}</span>
      </div>
      
      {/* Progress Bar Section */}
      <div className="w-full bg-neutral-100 rounded-full h-2">
        {/* Dynamic Progress Bar */}
        <div className={`bg-green-400 h-2 rounded-full`} style={{ width: impact.width }}></div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>
    </div>
  );
}

export default Overview;
