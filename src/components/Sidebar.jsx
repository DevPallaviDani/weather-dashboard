import React from "react";
import {
  Home,
  CloudSun,
  BarChart3,
  Settings,
  LucideSidebar,
} from "lucide-react";
import SidebarItem from "../components/SidebarItem";
function Sidebar({ isOpen, onToggleSidebar }) {
  return (
    <>
      <div
        className={`bg-gradient-to-r from-slate-950 to-sky-950 text-white min-h-screen transition-all duration-300 
      ${isOpen ? "w-64 p-4" : "w-20 p-2"} 
      rounded-tr-3xl rounded-br-3xl`}
      >
        {/* Logo */}
        {/* Top Section (Logo + Toggle) */}
        <div className="flex items-center justify-between mt-8 mb-6">
          {/* Logo */}
          <h1
            className={`font-bold text-lime-400 transition-all duration-300 ${
              isOpen ? "text-lg" : "text-sm text-center w-full"
            }`}
          >
            {isOpen ? "Weather Nova" : "WN"}
          </h1>

          {/* Toggle Button */}
          <LucideSidebar
            className="cursor-pointer text-gray-300"
            onClick={onToggleSidebar}
          />
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-6">
          {/* Item */}
          <SidebarItem
            icon={<Home size={20} />}
            label="Dashboard"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<CloudSun size={20} />}
            label="Weather"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<BarChart3 size={20} />}
            label="Analytics"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            label="Settings"
            isOpen={isOpen}
          />
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
