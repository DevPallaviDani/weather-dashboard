import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WeatherCard from "../components/WeatherCard";
import StatsCard from "../components/StatsCard";
import ForecastCard from "../components/ForecastCard";
import WeeklyForeCast from "../components/WeeklyForeCast";
import { getWeather, getForeCast } from "../api/weather";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [foreCast, setForeCast] = useState([]);

  useEffect(() => {
    try {
      getWeather("pune").then((data) => {
        setWeather(data);
      });
      getForeCast().then((foreCastData) => {
        setForeCast(foreCastData.list);
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);
  useEffect(() => {
    console.log("Forecast data: ", foreCast);
  }, [foreCast]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-3 p-6">
        <Header />

        <div className="grid grid-cols-12 gap-12 mt-4 auto-rows-[140px]">
          {/* Main Weather */}
          <WeatherCard weather={weather} className="col-span-6" />

          {/* Right side forecast */}
          <WeeklyForeCast className="col-span-6" />

          {/* Chart */}
          <ForecastCard foreCastData={foreCast} />

          {/* Stats */}

          {weather && (
            <div className="justify-between col-span-8 row-span-2 grid grid-cols-2 grid-rows-2 gap-2 bg-white rounded-xl shadow border border-gray-100 hover:shadow-lg transition">
              <StatsCard
                title="Humanity"
                value={weather.main.humidity}
                icon="💧"
              />
              <StatsCard
                title="Wind"
                value={`${weather.wind.speed} km/h`}
                icon="🌬"
              />
              <StatsCard
                title="Visibility"
                value={weather.visibility}
                icon="☀️"
              />
              <StatsCard
                title="Pressure"
                value={weather.main.pressure}
                icon="☀️"
              />

              {/* <StatsCard title="Humidity" value="72%" icon="💧" />
            <StatsCard title="Wind" value="5 km/h" icon="🌬" />
            <StatsCard title="UV Index" value="6" icon="☀️" />
            <StatsCard title="Pressure" value="1008Mb" icon="☀️" /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
