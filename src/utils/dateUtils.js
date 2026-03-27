export const getDayLabel = (dateInput) => {
  if (!dateInput) return "";

  let date;

  if (typeof dateInput === "number") {
    date = new Date(dateInput * 1000);
  } else if (typeof dateInput === "string") {
    date = new Date(dateInput.replace(" ", "T"));
  } else {
    return "Invalid";
  }

  if (isNaN(date)) return "Invalid";

  const today = new Date();

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  }

  return date.toLocaleDateString("en-US", {
    weekday: "short", // Mon, Tue
  });
};
