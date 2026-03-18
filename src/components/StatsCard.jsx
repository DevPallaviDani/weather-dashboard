import { PlayCircle } from "lucide-react";
import { Droplets, Wind, Gauge } from "lucide-react";
import React from "react";

function StatsCard({ title, value, icon }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition">
      <span className="text-xl">{icon}</span>{" "}
      <div>
        <h3 className="text-sm text-gray-500 font-semibold">{title}</h3>
        <h2 className="font-bold">{value}</h2>
      </div>
    </div>
  );
}

export default StatsCard;
