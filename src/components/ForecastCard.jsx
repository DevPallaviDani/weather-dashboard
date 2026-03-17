// import { LineChart } from "lucide-react";
import React from "react";

const data = [
  { time: "9:00 AM", icon: "☀️", temp: 24 },
  { time: "10:00 AM", icon: "🌧", temp: 26 },
  { time: "11:00 AM", icon: "🌤", temp: 28 },
  { time: "12:00 PM", icon: "☁️", temp: 27 },
  { time: "01:00 PM", icon: "🌦", temp: 29 },
  { time: "02:00 PM", icon: "🌧", temp: 30 },
  { time: "03:00 PM", icon: "⛅", temp: 28 },
];
function ForecastCard() {
  return (
    <>
      <div className="col-span-8 bg-white rounded-2xl p-2 shadow h-fit">
        <h2 className="text-lg font-semibold mb-2">Todays Forecast</h2>
        <div className="grid grid-cols-7 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-1  rounded-xl hover:bg-gray-50 transition"
            >
              <p className="text-sm text-gray-500">{item.time}</p>

              <div className="text-3xl my-2">{item.icon}</div>

              <p className="font-semibold">{item.temp}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ForecastCard;
