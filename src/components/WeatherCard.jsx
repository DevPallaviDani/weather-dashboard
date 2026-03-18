import { Droplets, Wind, Gauge } from "lucide-react";
import React from "react";
const cityName = "Pune";
function WeatherCard({ weather, forecast }) {
  if (!weather) return null;
  return (
    <>
      <div className="flex justify-between col-span-8 p-2 text-gray-700 bg-white rounded-2xl min-h-fit">
        {/* Top section */}
        <div className="grid gap-4 p-2">
          <div>
            <h1 className="font-bold text-5xl">{cityName}</h1>
            <p className="text-sm text-gray-400">
              Chance of rain:
              <span> {Math.round(forecast[0].pop * 100)}%</span>
            </p>
          </div>
          {/* {console.log("POP from WeatherCard",forecast[0].pop)} */}

          <div className="grid content-end">
            <h2 className="text-7xl font-bold mt-1">
              {" "}
              {Math.round(weather.main.temp)}°C
            </h2>
            {/* <p className="mt-2 text-lg">
                {weather.weather[0].description} ☀️
              </p> */}
          </div>
        </div>
        <div>
          {/* Weather Icon */}
          {/* <div className="text-6xl">${weather.weather[0].icon}☀️</div> */}
          <img
            className="size-60  hover:shadow-black hover:scale-105 rounded-full  "
            // bg-gradient-to-r from-slate-950 to-sky-950
            src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
            alt="weather"
          />
        </div>
        {/* Bottom stats */}
        {/* <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="flex items-center gap-2">
            <Droplets />
            <div>
              <p className="text-sm opacity-80">Humidity</p>
              <p className="font-semibold">72%</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Wind />
            <div>
              <p className="text-sm opacity-80">Wind</p>
              <p className="font-semibold">5 km/h</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Gauge />
            <div>
              <p className="text-sm opacity-80">Pressure</p>
              <p className="font-semibold">1008 mb</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default WeatherCard;
