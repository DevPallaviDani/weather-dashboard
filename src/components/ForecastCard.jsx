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
  const foreCastHours = new Date(item.dt_txt);
  return foreCastHours.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

function ForecastCard({ foreCastData }) {
  return (
    <>
      <div className="col-span-8 bg-white rounded-2xl p-2 shadow h-40">
        <h2 className="text-lg font-semibold mb-2">Todays Forecast</h2>
        <div className="grid grid-cols-8 gap-6 items-center justify-between">
          {foreCastData && foreCastData.length > 0 ? (
            foreCastData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4
                 border-r-2 border-gray-200 last:border-none  hover:bg-gray-50 transition"
              >
                {console.log("POP: ",item.pop)}
                <p className="text-sm text-gray-500">
                  {getForeCastHours(item)}
                </p>
                <img
                  className="size-8"
                  src={`https://openweathermap.org/payload/api/media/file/${item.weather[0].icon}.png`}
                  alt="weather"
                />

                {/* <p className="font-semibold"> {Math.round(item.main.temp)}°C</p> */}
                <p className="p-1 font-semibold">{item.main.temp}°C</p>
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
