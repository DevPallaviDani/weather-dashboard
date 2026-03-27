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
      <div className="col-span-12 md:col-span-8 bg-white dark:bg-gray-800 rounded-2xl p-3 sm:p-4">
        <h2 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
          Today's Forecast
        </h2>

        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 pr-1 snap-x snap-mandatory">
          {foreCastData && foreCastData.length > 0 ? (
            foreCastData.map((item, index) => (
              <div
                key={index}
                className="snap-start shrink-0 min-w-[84px] sm:min-w-[92px]
                     flex flex-col items-center justify-center
                     p-2 sm:p-3 gap-1.5 sm:gap-2
                     border border-gray-200 dark:border-gray-600
                     rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700
                     transition"
              >
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 text-center">
                  {getForeCastHours(item)}
                </p>

                <img
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  src={`https://openweathermap.org/img/wn/${item.weather?.[0]?.icon}@2x.png`}
                  alt="weather"
                />

                <p className="text-sm sm:text-base font-semibold">
                  {Math.round(item.main.temp)}°C
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Loading...
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ForecastCard;
