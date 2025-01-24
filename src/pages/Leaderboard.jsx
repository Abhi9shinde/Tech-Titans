import React, { useState } from 'react';

// Expanded Dynamic Data for leaderboard (this can be passed in from an API or props)
const leaderboardData = [
  { name: 'John Smith', cupsSaved: 567, co2Reduced: '28.35kg', achievements: ['Green Champion'], status: 'Active', department: 'Engineering', timeFrame: 'week' },
  { name: 'Emma Wilson', cupsSaved: 428, co2Reduced: '21.56kg', achievements: ['Eco Warrior'], status: 'Active', department: 'Marketing', timeFrame: 'month' },
  { name: 'Alex Chen', cupsSaved: 392, co2Reduced: '19.56kg', achievements: ['Eco Warrior'], status: 'Active', department: 'HR', timeFrame: 'week' },
  { name: 'Sarah Johnson', cupsSaved: 347, co2Reduced: '17.35kg', achievements: ['Weekly Star', 'Consistent'], status: 'Active', department: 'Engineering', timeFrame: 'month' },
  { name: 'Michael Brown', cupsSaved: 312, co2Reduced: '15.60kg', achievements: ['Rising Star'], status: 'Active', department: 'Business', timeFrame: 'all-time' },
  { name: 'Olivia Davis', cupsSaved: 650, co2Reduced: '32.76kg', achievements: ['Champion of the Month'], status: 'Active', department: 'Design', timeFrame: 'week' },
  { name: 'Liam Martinez', cupsSaved: 510, co2Reduced: '25.60kg', achievements: ['Top Contributor'], status: 'Active', department: 'Operations', timeFrame: 'month' },
  { name: 'Sophia Garcia', cupsSaved: 470, co2Reduced: '23.40kg', achievements: ['Eco Warrior'], status: 'Active', department: 'Finance', timeFrame: 'all-time' },
  { name: 'William Lee', cupsSaved: 350, co2Reduced: '17.80kg', achievements: ['Newcomer of the Month'], status: 'Active', department: 'Sales', timeFrame: 'week' },
  { name: 'Ava Taylor', cupsSaved: 300, co2Reduced: '15.20kg', achievements: ['Sustainability Star'], status: 'Active', department: 'Legal', timeFrame: 'all-time' },
  { name: 'Justin Bieber', cupsSaved: 402, co2Reduced: '19.35kg', achievements: ['Green Champion'], status: 'Active', department: 'Engineering', timeFrame: 'month' },
  { name: 'Jonas Khanwald', cupsSaved: 444, co2Reduced: '21.75kg', achievements: ['Eco Warrior'], status: 'Active', department: 'Engineering', timeFrame: 'week' },
  { name: 'Ayanokoji Kiyotaka', cupsSaved: 301, co2Reduced: '14.01kg', achievements: ['Sustainability Star'], status: 'Active', department: 'Engineering', timeFrame: 'month' },
  { name: 'Horikita Suzune', cupsSaved: 750, co2Reduced: '35.35kg', achievements: ['Top Contributor'], status: 'Active', department: 'Engineering', timeFrame: 'all-time' },
  { name: 'Karuizawa Kei', cupsSaved: 503, co2Reduced: '24.24kg', achievements: ['Green Champion'], status: 'Active', department: 'Engineering', timeFrame: 'week' },
  { name: 'Sudo', cupsSaved: 560, co2Reduced: '26.35kg', achievements: ['Green Champion'], status: 'Active', department: 'Engineering', timeFrame: 'all-time' },
];

const LeaderCard = ({ rank, name, cupsSaved, co2Reduced, achievements, status }) => {
  return (
    <div className={`relative flex flex-col items-center p-6 bg-${rank === 1 ? 'emerald' : 'neutral'}-50 rounded-lg transform -translate-y-${rank === 1 ? '8' : '4'}`}>
      <div
        className={`w-${rank === 1 ? '20' : '16'} h-${rank === 1 ? '20' : '16'} rounded-full mb-4`}
        style={{
          backgroundImage: `url('/images/user.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <span className={`text-${rank === 1 ? '3xl' : '2xl'} font-bold text-${rank === 1 ? 'emerald' : 'neutral'}-600 mb-1`}>{rank}st</span>
      <h3 className="text-xl font-medium text-neutral-800">{name}</h3>
      <p className="text-neutral-600 mb-2">{cupsSaved} Cups Saved</p>
      <span className={`bg-${rank === 1 ? 'emerald' : 'blue'}-100 text-${rank === 1 ? 'emerald' : 'blue'}-800 text-xs px-3 py-1 rounded-full`}>
        {achievements.join(' ')}
      </span>
    </div>
  );
};

const Leaderboard = () => {
  const [timeFrame, setTimeFrame] = useState('week'); 
  const filteredData = leaderboardData.filter(item => item.timeFrame === timeFrame);

  const sortedData = filteredData.sort((a, b) => b.cupsSaved - a.cupsSaved);

  return (
    <div className="w-full">
      <section id="leaderboard" className="p-6 w-full h-screen overflow-y-scroll">
        <div className="bg-neutral-800 rounded-lg border border-neutral-200/30">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold text-white">Sustainability Champions</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${timeFrame === 'week' ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                  onClick={() => setTimeFrame('week')}
                >
                  This Week
                </button>
                <button
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${timeFrame === 'month' ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                  onClick={() => setTimeFrame('month')}
                >
                  This Month
                </button>
                <button
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${timeFrame === 'all-time' ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                  onClick={() => setTimeFrame('all-time')}
                >
                  All Time
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {sortedData.slice(0, 3).map((user, index) => (
                <LeaderCard key={index} rank={index + 1} {...user} />
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200/30">
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Rank</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">User</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Cups Saved</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">CO2 Reduced</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Achievements</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((user, index) => (
                    <tr key={index} className="border-b border-neutral-200/30">
                      <td className="px-4 py-4 text-sm text-neutral-300">{`#${index + 1}`}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-neutral-200 rounded-full mr-3"></div>
                          <div>
                            <p className="text-sm font-medium text-neutral-300">{user.name}</p>
                            <p className="text-xs text-neutral-300">{user.department}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-neutral-300">{user.cupsSaved}</td>
                      <td className="px-4 py-4 text-sm text-neutral-300">{user.co2Reduced}</td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1">
                          {user.achievements.map((achievement, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full">{user.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
