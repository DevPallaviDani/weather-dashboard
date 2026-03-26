export const getWeatherTheme = (type) => {
  switch (type) {
    
    case "Clear":
      return "from-yellow-300 via-orange-400 to-pink-500"; // ☀️ sunny

    case "Clouds":
      return "from-gray-300 via-gray-400 to-gray-500"; // ☁️ cloudy

    case "Rain":
      return "from-blue-600 via-indigo-700 to-gray-800"; // 🌧️ rainy

    case "Thunderstorm":
      return "from-gray-800 via-purple-900 to-black"; // ⛈️ storm

    case "Snow":
      return "from-blue-100 via-white to-gray-200"; // ❄️ snow

    default:
      return "from-sky-400 via-blue-500 to-indigo-600"; // default
  }
};
