import React, { useState, useEffect } from 'react';

const CounterCard = ({ title, count, increment, changeRate, color, icon }) => {
  const updatedCount = count + increment;
  return (
    <div className="bg-neutral-50 rounded-xl p-6 shadow-lg animate__animated animate__fadeInUp">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <div className={`bg-${color}-100 p-2 rounded-full`}>
          {icon}
        </div>
      </div>
      <p className="text-3xl font-bold text-neutral-900">{updatedCount.toLocaleString()}</p>
      <p className={`text-${color}-600 text-sm mt-2`}>↑ {changeRate}% from last month</p>
    </div>
  );
};

const CommunityDashboard = () => {
  const [counters, setCounters] = useState({
    activeMembers: 2547,
    cupsSaved: 157892,
    co2Reduced: 5234,
    pointsEarned: 892547
  });

  const leaderboardData = [
    { rank: 1, name: "Sarah Chen", cupsSaved: 432, points: 12460, status: "Eco Warrior" },
    { rank: 2, name: "Mike Johnson", cupsSaved: 385, points: 11234, status: "Sustainability Pro" },
    { rank: 3, name: "Emma Williams", cupsSaved: 347, points: 10123, status: "Green Champion" },
    { rank: 4, name: "David Kim", cupsSaved: 321, points: 9876, status: "Eco Enthusiast" },
    { rank: 5, name: "Lisa Garcia", cupsSaved: 298, points: 8654, status: "Green Starter" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters => ({
        activeMembers: prevCounters.activeMembers + 1,
        cupsSaved: prevCounters.cupsSaved + 5,
        co2Reduced: prevCounters.co2Reduced + 2,
        pointsEarned: prevCounters.pointsEarned + 10
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='border-t border-neutral-800'>
      <section id="community-dashboard" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Community Dashboard</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Track our collective impact and progress towards a sustainable future.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <CounterCard
              title="Active Members"
              count={counters.activeMembers}
              increment={1}
              changeRate={12}
              color="green"
              icon={<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
            />
            <CounterCard
              title="Cups Saved"
              count={counters.cupsSaved}
              increment={5}
              changeRate={25}
              color="blue"
              icon={<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>}
            />
            <CounterCard
              title="CO₂ Reduced"
              count={counters.co2Reduced}
              increment={2}
              changeRate={18}
              color="teal"
              icon={<svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path></svg>}
            />
            <CounterCard
              title="Points Earned"
              count={counters.pointsEarned}
              increment={10}
              changeRate={15}
              color="purple"
              icon={<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
            />
          </div>

          <div className="bg-neutral-50 rounded-xl p-8 shadow-lg animate__animated animate__fadeIn">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Community Leaderboard</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Member</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Cups Saved</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Points</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {leaderboardData.map(entry => (
                    <tr key={entry.rank} className="hover:bg-neutral-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">#{entry.rank}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{entry.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{entry.cupsSaved}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{entry.points}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${entry.rank === 1 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{entry.status}</span>
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

export default CommunityDashboard;
