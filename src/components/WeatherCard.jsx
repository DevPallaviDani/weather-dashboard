import { Droplets, Wind, Gauge } from "lucide-react";
import React from "react";

function WeatherCard() {
  return (
    <>
      <div
        className="col-span-8 row-span-1 p-2 text-gray-700"
        // bg-gradient-to-r from-gray-500 to-white-500
      >
          
          {/* <span>Pune</span> */}
        {/* Top section */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-lg opacity-90">Today</p>
            <h1 className="text-8xl font-bold mt-2">28°C</h1>
            <p className="mt-2 text-lg">Mostly Sunny ☀️</p>
          </div>

          {/* Weather Icon */}
          <div className="text-6xl">☀️</div>
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
