import { Droplets, Wind, Gauge } from "lucide-react";
import React from "react";

function WeatherCard({ weather }) {
  if (!weather) return null;
  return (
    <>
      <div
        className="col-span-8 row-span-1 p-2 text-gray-700"
        // bg-gradient-to-r from-gray-500 to-white-500
      >
      
        {/* Top section */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl opacity-90">Pune</h1>
            <h2 className="text-7xl font-bold mt-2"> {weather.main.temp}°C</h2>
            <p className="mt-2 text-lg">{weather.weather[0].description} ☀️</p>
          </div>
          {console.log(weather)}
          {/* Weather Icon */}
          {/* <div className="text-6xl">${weather.weather[0].icon}☀️</div> */}
          <img
            className="size-40 shadow-2xl hover:shadow-black hover:scale-105 rounded-full  bg-gradient-to-r from-slate-950 to-sky-950"
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
