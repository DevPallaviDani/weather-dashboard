import React from "react";
import SunCycle from "./SunCycle";
import { getDayLabel } from "../utils/dateUtils";
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

function WeeklyForeCast({ weeklyForeCast = [], weather }) {
  if (!weeklyForeCast.length) {
    return (
      <div className="col-span-12 md:col-span-4 bg-white rounded-2xl p-4 shadow  dark:bg-gray-800">
        <h2 className=" font-semibold mb-4">Next Days</h2>
        <p className="text-gray-400">No forecast data available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-5 shadow dark:bg-gray-800 
    flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Next Days</h2>

      <div className="flex-1 flex flex-col">
        {weeklyForeCast.map((day, index) => {
          const label = getDayLabel(day?.dt_txt || day?.dt);
          const iconCode = day?.weather?.[0]?.icon;
          const iconUrl = iconCode
            ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
            : "";
          const maxTemp = Math.round(day?.main?.temp_max ?? 0);
          const minTemp = Math.round(day?.main?.temp_min ?? 0);

          return (
            <div
              key={index}
              className="flex-1 min-h-[54px] flex items-center justify-between 
              px-2 sm:px-3 hover:bg-gray-50 hover:rounded-md transition
                     border-b border-gray-200 last:border-none
                     dark:border-gray-600 dark:hover:bg-gray-600"
            >
              <span
                className={`w-14 font-semibold ${
                  label === "Today"
                    ? "text-blue-500"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {label}
              </span>

              {iconUrl && (
                <img className="w-8 h-8" src={iconUrl} alt="weather icon" />
              )}

              <span className="text-sm font-medium">
                <span className="text-gray-800 dark:text-gray-400">
                  {maxTemp}°C
                </span>{" "}
                /{" "}
                <span className="text-gray-600 dark:text-gray-500">
                  {minTemp}°C
                </span>
                {day?.isDummy && (
                  <p className="text-xs text-gray-400">(est.)</p>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeeklyForeCast;
