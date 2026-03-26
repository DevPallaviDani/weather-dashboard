import React from "react";
import SunCycle from "./SunCycle";

function WeatherCard({ weather, forecast, city }) {
  // ✅ Guard (important)
  if (!weather) return null;
  console.log("Weather from weather card: ", weather);
  const mainWeather = weather.main;
  const rainChance =
    forecast?.[0]?.pop !== undefined ? Math.round(forecast[0].pop * 100) : 0;
  return (
    <>
      <div className="col-span-12 md:col-span-8 bg-transparent text-gray-500 dark:text-gray-100 rounded-2xl p-4 flex justify-between items-center ">
        {/* Top section */}
        <div className="grid gap-8 p-2">
          <div>
            {/* <h1 className="text-2xl md:text-5xl font-bold">{weather.name}</h1> */}
            <h2 className="text-2xl md:text-5xl font-bold">
              {weather?.name || city || "Current Location"}
            </h2>

            <p className="text-sm text-gray-400 p-1">
              {weather?.weather?.[0]?.description || "Loading..."} | Chance of
              rain:
              <span> {rainChance}%</span>
            </p>
          </div>
         
          <div className="grid content-end">
            <h2 className="text-4xl md:text-7xl font-bold mt-2">
              {mainWeather?.temp !== undefined
                ? Math.round(mainWeather?.temp)
                : "--"}
              °C
            </h2>
          </div>
        </div>

        {/* Weather Icon */}
        <img
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-52 md:h-52 object-contain hover:shadow-black hover:scale-105 rounded-full "
          src={
            weather?.weather?.[0]?.icon
              ? `https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`
              : null
          }
          alt="weather"
        />
        
      </div>
      
    </>
  );
}

export default WeatherCard;
