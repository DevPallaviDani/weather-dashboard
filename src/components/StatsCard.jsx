import { PlayCircle } from "lucide-react";
import React from "react";

function StatsCard({ title, value, icon }) {
  return (
    <div className="p-8 ">
     
      <div className="flex flex-col gap-2 justify-items-start">
        <p className="text-gray-500 text-sm">{title}</p>
        <span className="text-xl">{icon}</span>{" "}
        <h2 className="text-2xl font-semibold mt-4">{value}</h2>
      </div>
    </div>
  );
}

export default StatsCard;
