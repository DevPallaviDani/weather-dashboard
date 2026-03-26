import React, { useState, useRef, useEffect } from "react";
import { MapPin, Search, Locate, Navigation } from "lucide-react";
import profile from "../assets/images/profileavatar.png";
import location from "../assets/images/currentlocationgif.gif";
import pin from "../assets/images/pin2.gif";
import { FaMapMarkerAlt } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
function Header({ onSearch, onUseLocation }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const handleSearch = () => {
    if (!input.trim()) return;
    onSearch(input);
    setInput("");
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div
        className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 rounded-2xl shadow mb-4 gap-3 dark:bg-gray-800"
        // className="flex items-center justify-between bg-white p-2 mb-2 rounded-2xl shadow w-2/3"
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 w-full">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-full sm:flex-1 dark:bg-gray-600">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search city..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 bg-transparent outline-none
            
               "
            />
            <Search
              className="cursor-pointer text-gray-500"
              onClick={() => {
                inputRef.current?.focus();
                handleSearch();
              }}
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-4 text-gray-600">
          <div className="relative group">
            <button onClick={onUseLocation}>
              {/* <FaMapMarkerAlt size={20} /> */}
              <img
                src={pin}
                size={80}
                className="w-6 h-6 cursor-pointer bg-transparent "
              />
            </button>
            {/* Tooltip */}
            <span
              className="absolute left-1/2 -translate-x-1/2 mt-8 bg-black text-white text-xs px-2 py-1 rounded 
                         opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
            >
              Use current location
            </span>
          </div>

          {/* Profile */}
          <img src={profile} alt="profile" className="w-10 h-10 rounded-full" />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}

export default Header;
