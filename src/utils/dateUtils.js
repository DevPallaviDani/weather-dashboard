const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getWeatherDayFromDate = (date) => {
  const weatherDate = new Date(date);
  const weatherDay = weatherDate.getDay();

  return dayName[weatherDay];
};
export const getDayLabel = (dateString) => {
  const today = new Date();
  const inputDate = new Date(dateString);

  const isToday =
    today.getDate() === inputDate.getDate() &&
    today.getMonth() === inputDate.getMonth() &&
    today.getFullYear() === inputDate.getFullYear();

  if (isToday) return "Today";

  return inputDate.toLocaleDateString("en-US", {
    weekday: "short", // Mon, Tue
  });
};
