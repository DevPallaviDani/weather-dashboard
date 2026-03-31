import React from "react";

function StatsCard({ title, value, icon: Icon, iconColor }) {
  return (
    <div
      className="sm:h-28 flex items-start justify-start
       md:h-10 gap-3 p-3 rounded-md transition"
      //  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition dark:hover:bg-gray-600"
    >
      <Icon style={{ color: iconColor }} size={28} />
      <div className="text-left">
        <h3 className="text-xs sm:text-sm text-gray-500 font-semibold">
          {title}
        </h3>
        <h2 className="font-bold text-base sm:text-lg leading-tight">
          {value}
        </h2>
      </div>
    </div>
  );
}

export default StatsCard;
