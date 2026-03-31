import React from "react";
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import profile from "../assets/images/profileavatar.png";

import pin from "../assets/images/pin.gif";
import logo from "../assets/images/logoskylite.png";
import ThemeToggle from "./ThemeToggle";

function NavBar({ onSearch, onUseLocation }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const menuRef = useRef(null);

  // hamburder set open or not
  const [open, setOpen] = useState(false);

  const handleSearch = () => {
    if (!input.trim()) return;
    onSearch(input);
    setInput("");
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // logic for Rezing the Hamburger menu automatically close when screen changes from mobile to desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[100%] md:w-[90%] max-w-7xl z-50">
        <div
          className="flex items-center justify-between px-4 py-3 gap-2
      bg-white/20 backdrop-blur-xl border border-white/20
      rounded-2xl shadow-lg"
        >
          {/* Logo + Tagline */}
          <div>
            <img src={logo} alt="SkyLite logo" className="w-10 h-10" />
          </div>

          {/* Search */}
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

          {/* Desktop version */}
          <div className="hidden md:flex items-center gap-4 text-gray-500 dark:text-gray-300">
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

            <ThemeToggle />
            <img
              src={profile}
              alt="profile"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full"
            />
          </div>

          {/* hamburder button */}
          <div ref={menuRef} className=" relative ml-2 flex items-center ">
            {/* Profile avatar  */}
            <img
              onClick={() => setOpen(!open)}
              src={profile}
              alt="profile"
              className="md:hidden text-gray-600 w-9 h-9 sm:w-10 sm:h-10 rounded-full"
            />
            

            {/* Mobile Menu  */}
            {open && (
              <div
                className="flex flex-col items-end rounded-2xl border border-white/20
          bg-white/20 backdrop-blur-xl shadow-lg lg:hidden
          md:hidden absolute top-full right-0 w-fit"
              >
                {/* use current location button */}
                <button onClick={onUseLocation} className="p-1 rounded-md">
                  <img
                    src={pin}
                    alt="Use current location"
                    className="flex items-center gap-2 justify-centerw-6 h-6 cursor-pointer "
                  />
                </button>
                <span
                  className="absolute left-1/2 -translate-x-1/2 mt-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 
                group-hover:opacity-100 transition whitespace-nowrap z-10"
                >
                  Use current location
                </span>

                {/* Toggle Theme button  */}
                <ThemeToggle />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
