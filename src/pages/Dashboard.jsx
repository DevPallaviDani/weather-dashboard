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
import { 
  Wind,
  Gauge, 
  CloudRain,
  Thermometer,
  EyeIcon,
} from "lucide-react";
// import SunCycle from "../components/SunCycle";

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

  const weatherType = weather?.weather?.[0]?.main;
  const themeClass = getWeatherTheme(weatherType);
  console.log(weatherType, themeClass);

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
    <div
      className="min-h-screen w-full transition-all duration-700 dark:text-gray-400
             bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0)]
             dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)] "
              
    >
      
      {/* <Sidebar
        isOpen={isSideBarOpen}
        onToggleSidebar={() => setIsSideBarOpen(!isSideBarOpen)}
      /> */}

      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6 py-3 sm:py-4 items-stretch">
        <Header
          onSearch={handleSearch}
          onToggleSidebar={() => setIsSideBarOpen(!isSideBarOpen)}
          onUseLocation={handleUseLocation}
          error={error}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* LEFT COLUMN */}
          <div className="order-1 lg:order-1 lg:col-span-8 flex flex-col gap-4 h-full">
            {/* Main Weather */}

            <WeatherCard weather={weather} forecast={foreCast} city={city} />

            {/* Chart */}
            <ForecastCard foreCastData={foreCast} />

            {/* Stats */}
            <div className="lg:col-span-12 bg-white dark:bg-gray-800 dark:text-gray-400 rounded-xl p-4 sm:p-5">
              <div className="flex items-center justify-between px-1 sm:px-2">
                <h2 className="font-semibold text-sm sm:text-base">
                  AIR CONDITION
                </h2>
              </div>
             

              {weather && (
                <div
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"                
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
                  <StatsCard
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
                  />
                </div>
              )}
            </div>
          </div>
          {/* RIGHT COLUMN: weekly forecast fixed to right column */}
          <div className="order-2 lg:order-2 lg:col-span-4 flex">
            {/* Weekly Forecast */}
            <WeeklyForeCast weeklyForeCast={weeklyForeCast} weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
