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
const getForeCastHours = (item) => {
  const foreCastHours = new Date(item.dt * 1000);
  return foreCastHours.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

function ForecastCard({ foreCastData }) {
  return (
    <>
      <div className="col-span-12 md:col-span-8 bg-white rounded-2xl p-2  dark:bg-gray-800 ">
        <h2 className="font-semibold mb-4">Today's Forecast</h2>
        <div className="flex gap-4 overflow-x-auto justify-between ml-2"
        // className="grid grid-cols-8 gap-6 items-center justify-between"
        >
          {foreCastData && foreCastData.length > 0 ? (
            foreCastData.map((item, index) => (
              <div
                key={index}
                // className="min-w-[80px] text-center"
                className="flex flex-col items-center p-3 gap-2 hover:rounded-md
                 border-r-2 border-gray-200 last:border-none  hover:bg-gray-50 transition  dark:border-gray-600 dark:hover:bg-gray-600"
              >               
                <p className="text-sm text-gray-500">
                  {getForeCastHours(item)}
                </p>
                <img
                  className="size-8"
                  src={`https://openweathermap.org/payload/api/media/file/${item.weather[0].icon}.png`}
                  alt="weather"
                />             
                <p className="p-1 font-semibold">{Math.round(item.main.temp)}°C</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ForecastCard;
