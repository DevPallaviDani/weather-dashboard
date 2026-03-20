import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WeatherCard from "../components/WeatherCard";
import StatsCard from "../components/StatsCard";
import ForecastCard from "../components/ForecastCard";
import WeeklyForeCast from "../components/WeeklyForeCast";
import { getWeather, getForeCast, getWeeklyForeCast } from "../api/weather";
import { getNext5Days } from "../utils/forecastUtils";
import {
  Droplets,
  Wind,
  Gauge,
  ArrowDownUp,
  CloudRain,
  Thermometer,
} from "lucide-react";
const cityName = "Pune";
const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [foreCast, setForeCast] = useState([]);
  const [weeklyForeCast, setWeeklyForeCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    <>
      {/* const fetchData =async()=>{
      try {
        const weatherData = await getWeather();
        const foreCastData = await getForeCast();

        setWeather(weatherData);
        setForeCast(foreCastData?.list||[]);
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      };
      fetchData()
    }  */}

      {/* try {
      getWeather("pune").then((data) => {
        setWeather(data);
      });
      getForeCast().then((foreCastData) => {
        // setForeCast(foreCastData.list);
        setForeCast(foreCastData?.list || []);
      });

      // const dailyForeCast = getNext5Days(foreCast?.list || []);
      // setForeCast(dailyForeCast);
    } catch (error) {
      console.error(error);
      throw error;
    } */}
    </>;

    // ✅ Fetch Data (clean async/await)
    const fetchData = async () => {
      try {
        const weatherData = await getWeather({ cityName });
        const foreCastData = await getForeCast({ cityName });
        const weeklyForeCastData = await getWeeklyForeCast({ cityName });

        const list = weeklyForeCastData?.list || [];
        // ✅ Filter next 5 days
        const filteredWeeklyForecast = getNext5Days(list);

        setWeather(weatherData);
        setForeCast(foreCastData?.list || []);
        setWeeklyForeCast(filteredWeeklyForecast);
      
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Rain Chance Calculation (safe)
  const rainChance =
    foreCast?.length > 0 && foreCast[0]?.pop !== undefined
      ? Math.round(foreCast[0].pop * 100)
      : 0;

  // ✅ Loading UI
  if (loading) {
    return <div className="p-6">Loading weather data...</div>;
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-3 p-3">
        <Header />

        <div className="grid grid-cols-12 gap-4 items-end">
          {/* Main Weather */}
          <WeatherCard weather={weather} forecast={foreCast} />

          {/* Right side forecast */}
          <WeeklyForeCast weeklyForeCast={weeklyForeCast} />

          {/* Chart */}
          <ForecastCard foreCastData={foreCast} />

          {/* Stats */}
          <div
            className="col-span-8 bg-white rounded-xl shadow
           border border-gray-100 p-4 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center px-4 pt-1">
              <h2 className="font-semibold mb-4">AIR CONDITION</h2>
              <p
                className="text-lg mb-2 p-1 text-gray-50 rounded-xl bg-blue-500
              hover:cursor-pointer"
              >
                See More
              </p>
            </div>

            {weather && (
              <div className="grid grid-cols-2 justify-between items-center gap-4">
                <StatsCard
                  title="Real Feel"
                  value={`${Math.round(weather.main.feels_like)}°C`}
                  // icon="🌡"
                  icon={Thermometer}
                  iconColor={"red"}
                />
                {console.log(weather)}
                <StatsCard
                  title="Wind"
                  value={`${weather.wind.speed} km/h`}
                  // icon="🌬"
                  icon={Wind}
                  iconColor={"gray"}
                />
                <StatsCard
                  title="Chance of rain"
                  value={rainChance === 0 ? "No rain" : `${rainChance}%`}
                  // icon="💧"
                  icon={CloudRain}
                  iconColor={"blue"}
                />
                {/* {console.log("POP from Dashboard",foreCast[0].pop)} */}
                <StatsCard
                  title="Pressure"
                  value={weather.main.pressure}
                  // icon="☀️"
                  icon={ArrowDownUp}
                  iconColor={"black"}
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
    </div>
  );
};

export default Dashboard;
