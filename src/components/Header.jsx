import React, { useState, useRef, useEffect } from "react";
import { MapPin, Search, Locate, Navigation } from "lucide-react";
import profile from "../assets/images/profileavatar.png";
// import logo from "../assets/images/fulllogo.png"
import pin from "../assets/images/pin.gif";
import logo from "../assets/images/logoskylite.png";
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
      <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow p-3 sm:p-4 mb-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
           <img
              src={logo}
              alt="SkyLite logo"
              className="w-40 h-40 sm:w-10 sm:h-10"
            />
          {/* Brand */}
          <div className="flex items-center gap-3 justify-between w-full lg:w-auto">
           
            <div className="leading-tight">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                SkyLite
              </h1>
              <p className="text-sm dark:text-white/70 text-gray-500 dark:text-gray-300 mt-0.5">
                Weather, at a glance.
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="w-full lg:flex-1 lg:px-4">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-xl px-3 py-2 w-full">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search city..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 min-w-0 bg-transparent outline-none text-sm sm:text-base text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-300"
              />
              <Search
                className="shrink-0 cursor-pointer text-gray-500 dark:text-gray-300"
                onClick={() => {
                  inputRef.current?.focus();
                  handleSearch();
                }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="w-full lg:w-auto flex items-center justify-end sm:justify-start lg:justify-end gap-3 sm:gap-4 text-gray-600 dark:text-gray-200">
            <div className="relative group">
              <button onClick={onUseLocation} className="p-1 rounded-md">
                <img
                  src={pin}
                  alt="Use current location"
                  className="w-6 h-6 cursor-pointer"
                />
              </button>
              <span className="absolute left-1/2 -translate-x-1/2 mt-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                Use current location
              </span>
            </div>

            <img
              src={profile}
              alt="profile"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full"
            />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
