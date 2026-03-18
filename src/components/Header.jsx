import React from "react";
import { MapPin, Search, Bell } from "lucide-react";
import profile from "../assets/images/profileavatar.png";
function Header() {
  return (
    <>
      <div className="flex items-center justify-between bg-white p-2 mb-2 rounded-2xl shadow w-2/3">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-1/3">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search city..."
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>
        {/* Right Side */}
        <div className="flex items-center  gap-6 text-gray-600">
          <MapPin size={20} />
          <span>Pune</span>

          {/* Profile */}
          <img src={profile} alt="profile" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </>
  );
}

export default Header;
