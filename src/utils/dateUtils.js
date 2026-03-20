const dayName =["Sun", "Mon", "Tue","Wed","Thu","Fri","Sat"]

export const getWeatherDayFromDate =(date)=>{
const weatherDate = new Date(date);
const weatherDay=weatherDate.getDay();

return dayName[weatherDay];
}