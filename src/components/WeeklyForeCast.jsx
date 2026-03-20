import React from "react";
import { getWeatherDayFromDate } from "../utils/dateUtils";
<>
  {/* Dummy Data
const forecast = [
  { day: "Mon", icon: "☀️", max: 28, min: 20 },
  { day: "Tue", icon: "🌧", max: 26, min: 19 },
  { day: "Wed", icon: "☁️", max: 27, min: 21 },
  { day: "Thu", icon: "☀️", max: 29, min: 22 },
  { day: "Fri", icon: "🌤", max: 30, min: 23 },
  { day: "Sat", icon: "⛅", max: 29, min: 22 },
  { day: "Sun", icon: "🌦", max: 27, min: 21 },
]; */}
</>;

function WeeklyForeCast({ weeklyForeCast }) {
  console.log("Weekly fore cast: ", weeklyForeCast);

  return (
    <>
      <div className="col-span-4 row-span-3 bg-white rounded-2xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">Next Days</h2>

        <div>
          {weeklyForeCast.map((weather, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 hover:bg-gray-50
               transition border-b-2 border-gray-200 last:border-none"
            >
              {console.log(
                "weather day: ",
                getWeatherDayFromDate(weather.dt_txt),
              )}
              {/* day  */}
              <span className="text-gray-500 w-10 font-semibold">
                {getWeatherDayFromDate(weather.dt_txt)}
              </span>

              {/* icon */}
              <img
                className="size-8"
                src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
                alt="weather"
              />

              {/* temp */}
              <span className="text-sm font-medium">
                {`${Math.round(weather.main.temp_max)}°C/${Math.round(weather.main.temp_min)}°C`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WeeklyForeCast;
