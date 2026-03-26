let API_KEY = "1c3de1e7fcd103fffec5735b2557cb78"; //openweather

export const getWeather = async ({ city, lat, lon }) => {
  try {
    let api_url = "";

    if (city) {
      api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}`;
    } else if (lat && lon) {
      api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    }

    const res = await fetch(api_url);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getForeCast = async ({ city, lat, lon }) => {
  try {
    let api_forecast_url = "";

    if (city) {
      api_forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=8`;
    } else if (lat && lon) {
      api_forecast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&cnt=8`;
    }

    const res = await fetch(api_forecast_url);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getWeeklyForeCast = async ({ city, lat, lon }) => {
  try {
    let api_weeklyForeCast_url = "";
    if (city) {
      api_weeklyForeCast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    } else if (lat && lon) {
      api_weeklyForeCast_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    }

    const res = await fetch(api_weeklyForeCast_url);
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

