import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WeatherCard from "../components/WeatherCard";
import StatsCard from "../components/StatsCard";
import ForecastCard from "../components/ForecastCard";
import WeeklyForeCast from "../components/WeeklyForeCast";
import { useWeather } from "../hooks/useWeather";
import { WiHumidity } from "weather-icons-react";
import { getWeatherTheme } from "../utils/themeUtils";
import { Wind, Gauge, CloudRain, Thermometer, EyeIcon } from "lucide-react";
import NavBar from "../components/NavBar";
// import SunCycle from "../components/SunCycle";

const Dashboard = ({
  weather,
  foreCast,
  weeklyForeCast,
  loading,
  city,
  error,
}) => {
  const weatherType = weather?.weather?.[0]?.main;

  // change in error
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  // ✅ Rain Chance Calculation (safe)
  const rainChance =
    foreCast?.[0]?.pop !== undefined ? Math.round(foreCast[0].pop * 100) : 0;

  // ✅ Loading UI
  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-6 py-3 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {/* Main Weather */}

            <WeatherCard weather={weather} forecast={foreCast} city={city} />

            {/* Chart */}
            <ForecastCard foreCastData={foreCast} />

            {/* Stats */}

            <div
              className="bg-white dark:bg-gray-800 dark:text-gray-400 rounded-xl sm:p-5 
            h-[200px] flex flex-col"
            >
              <h2 className="font-semibold text-sm sm:text-base mb-3">
                AIR CONDITION
              </h2>

              {weather && (
                <div className="flex-1 overflow-y-auto pr-2">
                  <div
                    className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-2  sm:gap-4 md:gap-6
                    "
                  >
                    <StatsCard
                      title="Feels Like"
                      value={`${Math.round(weather?.main?.feels_like)}°C`}
                      icon={Thermometer}
                      iconColor="gray"
                    />
                    <StatsCard
                      title="Humidity"
                      value={weather?.main?.humidity}
                      icon={WiHumidity}
                      iconColor="black"
                    />
                    <StatsCard
                      title="Wind"
                      value={`${weather?.wind.speed} km/h`}
                      icon={Wind}
                      iconColor="gray"
                    />
                    <StatsCard
                      title="Chance of rain"
                      value={rainChance === 0 ? "No rain" : `${rainChance}%`}
                      icon={CloudRain}
                      iconColor="gray"
                    />
                    {/* <StatsCard
                      title="Pressure"
                      value={weather?.main?.pressure}
                      icon={Gauge}
                      iconColor="black"
                    />
                    <StatsCard
                      title="Visibility"
                      value={weather?.visibility}
                      icon={EyeIcon}
                      iconColor="black"
                    /> */}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* RIGHT COLUMN: weekly forecast fixed to right column */}

          <div className="order-2 lg:order-2 lg:col-span-4 flex  max-h-[700px] overflow-y-auto">
            {/* Weekly Forecast */}
            <WeeklyForeCast weeklyForeCast={weeklyForeCast} weather={weather} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
