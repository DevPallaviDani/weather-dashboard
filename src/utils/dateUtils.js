import dayjs from "dayjs";

export const getDayLabel = (dateInput) => {
  if (!dateInput) return "";

  let parsed;

  if (typeof dateInput === "number") {
    // Unix timestamp (seconds)
    parsed = dayjs.unix(dateInput);
  } else if (typeof dateInput === "string") {
    // Convert "YYYY-MM-DD HH:mm:ss" -> "YYYY-MM-DDTHH:mm:ss" for Safari/iOS safety
    date = dayjs(dateInput.replace(" ", "T"));
  } else {
    return "Invalid";
  }

  if (!parsed.isValid()) return "Invalid";

  const today = dayjs();

  if (parsed.isSame(today, "day")) {
    return "Today";
  }

  return parsed.format("ddd"); // Mon, Tue
};
