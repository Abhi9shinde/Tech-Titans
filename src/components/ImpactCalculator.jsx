import React, { useState } from 'react'

function ImpactCalculator() {
    const [dailyUse, setDailyUse] = useState(2);
  const [treesSaved, setTreesSaved] = useState(24);
  const [plasticReduced, setPlasticReduced] = useState(730);
  const handleSliderChange = (event) => {
    const newDailyUse = parseInt(event.target.value);
    setDailyUse(newDailyUse);
    const annualUse = newDailyUse * 365;
    setTreesSaved(Math.round(annualUse * 0.033));
    setPlasticReduced(annualUse);
  };
  return (
    <div className="mt-16 bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeIn rotate-3">
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold">Impact Calculator</h3>
      <p className="text-gray-400">Calculate your environmental impact by switching to sustainable alternatives</p>
    </div>
    <div className="max-w-xl mx-auto ">
      <div className="bg-neutral-700 rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Daily paper cup usage</label>
          <input
            type="range"
            id="usage-slider"
            min="1"
            max="10"
            value={dailyUse}
            onChange={handleSliderChange}
            className="w-full h-2 bg-neutral-600 rounded-lg appearance-none "
          />
          <div className="flex justify-between text-sm text-gray-400 mt-1">
            <span>1 cup</span>
            <span>10 cups</span>
          </div>
        </div>
        <div className="mt-6 p-4 bg-neutral-800 rounded-lg">
          <p className="text-center text-lg">Your annual impact reduction:</p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-center">
            <div>
              <p className="text-green-500 text-2xl font-bold">{treesSaved}</p>
              <p className="text-sm text-gray-400">Trees Saved</p>
            </div>
            <div>
              <p className="text-blue-500 text-2xl font-bold">{plasticReduced}</p>
              <p className="text-sm text-gray-400">Cups Eliminated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ImpactCalculator
