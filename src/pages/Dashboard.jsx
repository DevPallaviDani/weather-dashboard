import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WeatherCard from "../components/WeatherCard";
import StatsCard from "../components/StatsCard";
import ForecastCard from "../components/ForecastCard";
import WeeklyForeCast from "../components/WeeklyForeCast";
import { getWeather, getForeCast, getWeeklyForeCast } from "../api/weather";
import { getNext7Days } from "../utils/forecastUtils";
import {
  Droplets,
  Wind,
  Gauge,
  ArrowDownUp,
  CloudRain,
  Thermometer,
} from "lucide-react";
import { flushSync } from "react-dom";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [foreCast, setForeCast] = useState([]);
  const [weeklyForeCast, setWeeklyForeCast] = useState([]);
  const [city, setCity] = useState("Pune");
  const [loading, setLoading] = useState(true);
  const [isSideBarOpen , setIsSideBarOpen]=useState(true)

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
        const weatherData = await getWeather({ city });
        const foreCastData = await getForeCast({ city });
        const weeklyForeCastData = await getWeeklyForeCast({ city });

        const list = weeklyForeCastData?.list || [];
        // ✅ Filter next 7 days
        const filteredWeeklyForecast = getNext7Days(list);

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
  }, [city]);

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar isOpen ={isSideBarOpen}/>

      <div className="flex-1 p-1 md:p-4">
        <Header onSearch={(city) => setCity(city)}
         onToggleSidebar={() => setIsSideBarOpen(!isSideBarOpen)}/>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          {/* Main Weather */}
          <WeatherCard weather={weather} forecast={foreCast} />

          {/* Right side forecast */}
          <WeeklyForeCast weeklyForeCast={weeklyForeCast} />

          {/* Chart */}
          <ForecastCard foreCastData={foreCast} />

          {/* Stats */}
          <div className="col-span-12 md:col-span-8 bg-white p-4 rounded-xl">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
                <StatsCard
                  title="Real Feel"
                  value={`${Math.round(weather.main.feels_like)}°C`}
                  icon={Thermometer}
                  iconColor={"red"}
                />
                {console.log(weather)}
                <StatsCard
                  title="Wind"
                  value={`${weather.wind.speed} km/h`}
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
                  value={weather.main.pressure}
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
