import React from "react";

const Sidebar = () => {
  return (
    
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white text-black flex flex-col border-r">
       
        <ul className="flex-grow gap-2">
          <li className="hover:bg-gray-200 py-2">
            <a href="/dashboard/overview" className="block px-4 py-2">
            overview
            </a>
          </li>
          <li className="hover:bg-gray-200 py-2">
            <a href="/dashboard/leaderboard" className="block px-4 py-2">
            leaderboard
            </a>
          </li>
          <li className="hover:bg-gray-200 py-2">
            <a href="/dashboard/impact" className="block px-4 py-2">
            impact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
