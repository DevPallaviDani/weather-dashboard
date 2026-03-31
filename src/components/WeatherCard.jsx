import React from "react";
import SunCycle from "./SunCycle";

function WeatherCard({ weather, forecast, city }) {
  // ✅ Guard (important)
  if (!weather) return null;
  // console.log("Weather from weather card: ", weather);
  const mainWeather = weather.main;
  const rainChance =
    forecast?.[0]?.pop !== undefined ? Math.round(forecast[0].pop * 100) : 0;
  return (
    <>
      <div
        className="col-span-12 md:col-span-8 bg-transparent text-gray-500 dark:text-gray-100
             rounded-2xl p-3 sm:p-4
             flex flex-col sm:flex-row sm:justify-between sm:items-center
             gap-4 sm:gap-6 shrink-0 "
      >
        {/* Left content */}
        <div className="grid gap-3 sm:gap-6 p-1 sm:p-2 min-w-0">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold truncate">
              {weather?.name || city || "Current Location"}
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              {weather?.weather?.[0]?.description || "Loading..."} | Chance of
              rain:
              <span> {rainChance}%</span>
            </p>
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-none">
              {mainWeather?.temp !== undefined
                ? Math.round(mainWeather?.temp)
                : "--"}
              °C
            </h2>
          </div>
        </div>

        {/* Weather icon */}
        <div className="self-end sm:self-center shrink-0">
          <img
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 lg:w-52 lg:h-52 object-contain rounded-full hover:scale-105 transition-transform duration-200"
            src={
              weather?.weather?.[0]?.icon
                ? `https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`
                : undefined
            }
            alt="weather"
          />
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
