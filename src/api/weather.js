let API_KEY = "1c3de1e7fcd103fffec5735b2557cb78"; //openweather
// let city = "Pune";

export const getWeather = async (city) => {
  try {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=18.5246&lon=73.8786&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}`;
    const res = await fetch(api_url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getForeCast = async () => {
  try {
    const api_forecast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=18.5246&lon=73.8786&appid=1c3de1e7fcd103fffec5735b2557cb78&units=metric&cnt=8`;
    const resp = await fetch(api_forecast_url);
    const forecastData = await resp.json();
    console.log(`this is forecastdata ${forecastData}`);
    return forecastData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
