export const getNext5Days = (list) => {
  if (!list || list.length === 0) return [];

  const next5Daysresult = [];

  const seenDates = new Set();

  for (let item of list) {
    const date = item.dt_txt.split(" ")[0];

    if (!seenDates.has(date) && item.dt_txt.includes("12:00:00")) {
      next5Daysresult.push(item);
      seenDates.add(date);
    }
  }
  const next7Daysresult = extendTo7Days(next5Daysresult);
  return next7Daysresult;
};
export const extendTo7Days = (next5Daysresult) => {
  if (!next5Daysresult || next5Daysresult.length === 0) return [];

  const result = [...next5Daysresult];

  const lastDay = next5Daysresult[next5Daysresult.length - 1];

  for (let i = 1; i <= 2; i++) {
    const newDate = new Date(lastDay.dt_txt);
    newDate.setDate(newDate.getDate() + i);
    console.log(newDate);

    result.push({
      ...lastDay,
      date: newDate,
      isDummy: true, // mark as dummy
    });
  }

  return result;
};
