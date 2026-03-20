import React, { useState, useRef, useEffect } from "react";
import { MapPin, Search } from "lucide-react";
import profile from "../assets/images/profileavatar.png";
function Header({ onSearch ,error}) {
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
        className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 rounded-2xl shadow mb-4 gap-3"
        // className="flex items-center justify-between bg-white p-2 mb-2 rounded-2xl shadow w-2/3"
      >
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-full sm:flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 bg-transparent outline-none focus-within:bg-white border "
          />
          <Search
            className="cursor-pointer text-gray-500"
            onClick={() => {
              inputRef.current?.focus();
              handleSearch();
            }}
          />
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-4 text-gray-600">
          <MapPin size={20} />
          {/* <span>{input}</span> */}

          {/* Profile */}
          <img src={profile} alt="profile" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </>
  );
}

export default Header;
