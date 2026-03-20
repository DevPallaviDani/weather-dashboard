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
