import React from "react";

function StatsCard({ title, value, icon: Icon, iconColor }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition dark:hover:bg-gray-600">
      <Icon style={{ color: iconColor }} size={30} />
      <div>
        <h3 className="text-sm text-gray-500 font-semibold">{title}</h3>
        <h2 className="font-bold text-lg">{value}</h2>
      </div>
    </div>
  );
}

export default StatsCard;
