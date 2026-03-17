import React from "react";

const forecast = [
  { day: "Mon", icon: "☀️", temp: "28°" },
  { day: "Tue", icon: "🌧", temp: "26°" },
  { day: "Wed", icon: "☁️", temp: "27°" },
  { day: "Thu", icon: "☀️", temp: "29°" },
  { day: "Fri", icon: "🌤", temp: "30°" },
  { day: "Sat", icon: "⛅", temp: "29°" },
  { day: "Sun", icon: "🌦", temp: "27°" },
];

function WeeklyForeCast() {
  return (
    <>
      <div className="col-span-4 row-span-4 bg-white rounded-2xl p-6 shadow">

      <h2 className="text-lg font-semibold mb-4">
        7-Day Forecast
      </h2>

      <div className="space-y-4">

        {forecast.map((item, index) => (
          <div
            key={index}
             className="flex items-center justify-between p-3 hover:bg-gray-50 transition border-b-2"
          >
              <p className="text-sm text-gray-700">{item.day}</p>

              <div className="text-3xl my-2">{item.icon}</div>

              <p className="font-semibold">{item.temp}</p>
          
            </div>
            
          ))}
            
        </div>
      </div>
    </>
  );
}

export default WeeklyForeCast;
