const config = require("./config.json");
const key = config.key;
const BASE_URL = "https://pro.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: key });

  return fetch(url).then((res) => res.json());
};

const getAllWeatherData = async (searchParams) => {
  const currentData = await getWeatherData("weather", searchParams);
  const hourlyData = await getWeatherData("forecast/hourly", searchParams);
  const dailyData = await getWeatherData("forecast/daily", searchParams);

  const allData = {
    country: currentData.sys.country,
    city: currentData.name,
    timezone: currentData.timezone,
    currentWeather: {
      main: currentData.weather[0].main,
      icon: currentData.weather[0].icon,
      temp: currentData.main.temp,
      feels_like: currentData.main.feels_like,
      humidity: currentData.main.humidity,
      wind: currentData.wind.speed,
      temp_min: currentData.main.temp_min,
      temp_max: currentData.main.temp_max,
      sunrise: currentData.sys.sunrise,
      sunset: currentData.sys.sunset,
    },
    hourly: hourlyData.list.map((hour) => ({
      dt: hour.dt,
      main: hour.weather[0].main,
      icon: hour.weather[0].icon,
      temp: hour.main.temp,
    })),
    daily: dailyData.list.map((day) => ({
      dt: day.dt,
      main: day.weather[0].main,
      icon: day.weather[0].icon,
      temp_max: day.temp.max,
      temp_min: day.temp.min,
    })),
  };

  return allData;
};

export default getAllWeatherData;
