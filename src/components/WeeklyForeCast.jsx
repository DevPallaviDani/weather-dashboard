import React from "react";

const forecast = [
  { day: "Mon", icon: "☀️", max: 28, min: 20 },
  { day: "Tue", icon: "🌧", max: 26, min: 19 },
  { day: "Wed", icon: "☁️", max: 27, min: 21 },
  { day: "Thu", icon: "☀️", max: 29, min: 22 },
  { day: "Fri", icon: "🌤", max: 30, min: 23 },
  { day: "Sat", icon: "⛅", max: 29, min: 22 },
  { day: "Sun", icon: "🌦", max: 27, min: 21 },
];

function WeeklyForeCast() {
  return (
    <>
      <div 
      className="col-span-4 row-span-3 bg-white rounded-2xl p-6 shadow"
     
      >
        <h2 className="text-lg font-semibold mb-4">7-Day Forecast</h2>

        <div className="space-y-4">
          {forecast.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 hover:bg-gray-50
               transition border-b-2 border-gray-200 last:border-none"
            >
              {/* day  */}
              <span className="text-gray-500 w-10">{item.day}</span>
              {/* icon */}
              <span className="text-xl">{item.icon}</span>
              {/* temp */}
              <span className="text-sm font-medium">
                {item.max}/{item.min}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WeeklyForeCast;
