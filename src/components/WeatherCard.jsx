import React from "react";

function WeatherCard({ weather, forecast }) {
  if (!weather) return null;
  return (
    <>
      <div className="col-span-12 md:col-span-8 bg-white rounded-2xl p-4 flex justify-between items-center">
        {/* Top section */}
        <div className="grid gap-8 p-2">
          <div>
            {/* <h1 className="text-2xl md:text-5xl font-bold">{weather.name}</h1> */}
            <h2 className="text-2xl md:text-5xl font-bold">{weather?.name || city}</h2>

            <p className="text-sm text-gray-400 p-1">
              {weather.weather[0].description} | Chance of rain:
              <span> {Math.round(forecast[0].pop * 100)}%</span>
            </p>
          </div>

          <div className="grid content-end">
            <h2 className="text-4xl md:text-7xl font-bold mt-2">
              {" "}
              {Math.round(weather.main.temp)}°C
            </h2>
          </div>
        </div>

        {/* Weather Icon */}
        <img
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-52 md:h-52 object-contain hover:shadow-black hover:scale-105 rounded-full  "
          src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
          alt="weather"
        />
      </div>
    </>
  );
}

export default WeatherCard;
