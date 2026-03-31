import { useState, useEffect } from "react";
import { getWeather, getForeCast, getWeeklyForeCast } from "../api/weather";
import { getNext7Days } from "../utils/forecastUtils";

export const useWeather = (location) => {
  const [weather, setWeather] = useState(null);
  const [foreCast, setForeCast] = useState([]);
  const [weeklyForeCast, setWeeklyForeCast] = useState([]);

  const [city, setCity] = useState("");
  const [isUsingLocation, setIsUsingLocation] = useState(true);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleSearch = (city) => {
    if (!city.trim()) return;
    setCity(city);
    setIsUsingLocation(false);
  };

  const handleUseLocation = () => {
    setIsUsingLocation(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      // ✅ ADD THIS CHECK
      if (isUsingLocation && !location) return;

      if (!isUsingLocation && !city) return;

      setLoading(true);
      setError("");

      try {
        let weatherData, foreCastData, weeklyForeCastData;

        if (isUsingLocation && location) {
          weatherData = await getWeather({
            lat: location.lat,
            lon: location.lon,
          });
          // console.log("weatherData", weatherData);

          foreCastData = await getForeCast({
            lat: location.lat,
            lon: location.lon,
          });
          // console.log("foreCastData", foreCastData);
          weeklyForeCastData = await getWeeklyForeCast({
            lat: location.lat,
            lon: location.lon,
          });
          // console.log("weeklyForeCastData", weeklyForeCastData);
        } else {
          weatherData = await getWeather({ city });
          foreCastData = await getForeCast({ city });
          weeklyForeCastData = await getWeeklyForeCast({ city });
        }

        if (weeklyForeCastData.cod === "404") {
          setError(weeklyForeCastData.message);
          setWeather(null);
          setForeCast([]);
          setWeeklyForeCast([]);
          return;
        }

        const filtered = getNext7Days(weeklyForeCastData?.list || []);

        setWeather(weatherData);
        setForeCast(foreCastData?.list || []);
        setWeeklyForeCast(filtered);
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [city, isUsingLocation, location]);
  return {
    weather,
    foreCast,
    weeklyForeCast,
    loading,
    error,
    city,

    handleSearch,
    handleUseLocation,
  };
};
