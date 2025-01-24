import React from "react";

const Sidebar = () => {
  return (

    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-neutral-800 text-black flex flex-col border-r">

        <ul className="flex-grow gap-2">
          <li className="py-2 hover:bg-gray-700 hover:text-white transition-all duration-100">
            <a href="/dashboard/overview" className="block px-4 py-2 text-white">
              Overview
            </a>
          </li>
          <li className="py-2 hover:bg-gray-700 hover:text-white transition-all duration-100">
            <a href="/dashboard/leaderboard" className="block px-4 py-2 text-white">
              Leaderboard
            </a>
          </li>
          <li className="py-2 hover:bg-gray-700 hover:text-white transition-all duration-100">
            <a href="/dashboard/impact" className="block px-4 py-2 text-white hover:text-white transition-all duration-300">
              Impact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
