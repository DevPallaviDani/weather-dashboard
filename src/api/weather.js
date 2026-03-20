let API_KEY = "1c3de1e7fcd103fffec5735b2557cb78"; //openweather
// let city = "Pune";

export const getWeather = async ({ cityName }) => {
  try {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}`;
    const res = await fetch(api_url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getForeCast = async ({ cityName }) => {
  try {
    const api_forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&cnt=8`;
    const resp = await fetch(api_forecast_url);
    const forecastData = await resp.json();

    return forecastData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getWeeklyForeCast = async ({ cityName }) => {
  try {
    const api_weeklyForeCast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;

    const response = await fetch(api_weeklyForeCast_url);
    const weeklyForeCast = await response.json();

    return weeklyForeCast;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
