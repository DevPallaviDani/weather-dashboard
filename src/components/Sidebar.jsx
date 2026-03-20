import React from "react";
import { Home, CloudSun, BarChart3, Settings } from "lucide-react";

function Sidebar({ isOpen }) {
  return (
    <>
      <div
        className={`bg-white shadow min-h-screen transition-all duration-300 
      ${isOpen ? "w-64 p-4" : "w-0 p-0 overflow-hidden"} hover:scale-105 rounded-br-3xl rounded-tr-3xl bg-gradient-to-r from-slate-950 to-sky-950`}
        // className="hidden md:block md:w-64 bg-black text-white p-6
        //  hover:scale-105 rounded-br-3xl rounded-tr-3xl bg-gradient-to-r from-slate-950 to-sky-950"
      >
        {isOpen && (
          <div>
            <h1 className="font-bold mb-6 text-lime-600 mt-8">Weather Nova</h1>
            <nav className="flex flex-col gap-4 ">
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
        )}
        <>
        
        {/* Logo   */}
        {/* <h1 className="font-bold mb-6 text-lime-600 mt-8">Weather Nova</h1> */}

        {/* Menu */}
        {/* <nav className="flex flex-col gap-4 ">
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
        </nav> */}
        </>
      </div>
    </>
  );
}

export default Sidebar;
