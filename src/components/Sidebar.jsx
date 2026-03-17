import React from "react";
import { Home, CloudSun, BarChart3, Settings } from "lucide-react";

function Sidebar() {
  return (
    <>
      <div className="w-64 h-screen shadow-lg p-9 hover:scale-105 rounded-br-3xl rounded-tr-3xl
        bg-gradient-to-r from-slate-950 to-sky-950
        
       " >
        {/* Logo   */}
        <h1 className="text-2xl font-bold text-lime-600 mb-10 mt-8">Weather Nova</h1>

        {/* Menu */}
        <nav className="space-y-6 ">
          <div className="flex items-center gap-3 text-gray-100 hover:text-indigo-600 cursor-pointer">
            <Home size={20} />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 text-gray-100 hover:text-indigo-600 cursor-pointer">
            <CloudSun size={20} />
            <span>Weather</span>
          </div>
          <div className="flex items-center gap-3 text-gray-100 hover:text-indigo-600 cursor-pointer">
            <BarChart3 size={20} />
            <span> Analytics</span>
          </div>
          <div className="flex items-center gap-3 text-gray-100 hover:text-indigo-600 cursor-pointer">
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
