export const getNext5Days = (list) => {
  if (!list || list.length === 0) return [];

  const result = [];

  const seenDates = new Set();

  for (let item of list) {
    const date = item.dt_txt.split(" ")[0];

    if (!seenDates.has(date) && item.dt_txt.includes("12:00:00")) {
      result.push(item);
      seenDates.add(date);
    }
  }

  return result;
};
