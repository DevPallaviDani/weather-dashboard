import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WeatherCard from "../components/WeatherCard";
import StatsCard from "../components/StatsCard";
import ForecastCard from "../components/ForecastCard";
import WeeklyForeCast from "../components/WeeklyForeCast";
import { useWeather } from "../hooks/useWeather";

import {
  Droplets,
  Wind,
  Gauge,
  ArrowDownUp,
  CloudRain,
  Thermometer,
} from "lucide-react";

const Dashboard = ({ location }) => {
  const {
    weather,
    foreCast,
    weeklyForeCast,
    loading,
    error,
    city,
    setCity,
    setIsUsingLocation,
  } = useWeather(location);

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);


console.log("weather: ",weather);

  const handleSearch = (city) => {
    if (!city.trim()) return;
    setCity(city);
    setIsUsingLocation(false);
  };
  const handleUseLocation = () => {
    setIsUsingLocation(true);
  };

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar
        isOpen={isSideBarOpen}
        onToggleSidebar={() => setIsSideBarOpen(!isSideBarOpen)}
      />

      <div className="flex-1 p-1 md:p-4">
        <Header
          onSearch={handleSearch}
          onToggleSidebar={() => setIsSideBarOpen(!isSideBarOpen)}
          onUseLocation={handleUseLocation}
          error={error}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          {/* Main Weather */}
   

          <WeatherCard weather={weather} forecast={foreCast} city={city} />

          {/* Right side forecast */}
          <WeeklyForeCast weeklyForeCast={weeklyForeCast} />

          {/* Chart */}
          <ForecastCard foreCastData={foreCast} />

          {/* Stats */}
          <div className="col-span-12 md:col-span-8 bg-white p-4 rounded-xl">
            <div className="flex justify-between items-center px-4 pt-1">
              <h2 className="font-semibold mb-4">AIR CONDITION</h2>
              {/* <p
                className="text-lg mb-2 p-1 text-gray-50 rounded-xl bg-blue-500
              hover:cursor-pointer"
              >
                See More
              </p> */}
            </div>

            {weather && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
                <StatsCard
                  title="Real Feel"
                  value={`${Math.round(weather?.main?.feels_like)}°C`}
                  icon={Thermometer}
                  iconColor={"red"}
                />

                <StatsCard
                  title="Wind"
                  value={`${weather?.wind.speed} km/h`}
                  icon={Wind}
                  iconColor={"gray"}
                />

                <StatsCard
                  title="Chance of rain"
                  value={rainChance === 0 ? "No rain" : `${rainChance}%`}
                  icon={CloudRain}
                  iconColor={"blue"}
                />

                <StatsCard
                  title="Pressure"
                  value={weather?.main?.pressure}
                  icon={ArrowDownUp}
                  iconColor={"black"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
