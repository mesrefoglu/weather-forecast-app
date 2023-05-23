import { DateTime } from "luxon";

const config = require("./config.json");
const key = config.key;
const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall";
const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";
const REVERSE_GEO_URL = "https://api.openweathermap.org/geo/1.0/reverse";

const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const getCountryCode = (countryName) => {
  if (countryName === "USA") return "US";
  else if (countries.isValid(countryName)) return countryName;
  return countries.getAlpha2Code(countryName, "en");
};

const getWeatherData = async (searchParams) => {
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams({ ...searchParams, appid: key });

  const res = await fetch(url);
  return await res.json();
};

const getLocationData = async (searchParams) => {
  const url = new URL(REVERSE_GEO_URL);
  url.search = new URLSearchParams({ ...searchParams, limit: 1, appid: key });

  const res = await fetch(url);
  return await res.json();
};

const getAllWeatherData = async (searchParams) => {
  const units = searchParams.units;

  // if searchparams is a city name, then get lat lon from city name
  if (searchParams.hasOwnProperty("q")) {
    if (searchParams.q.includes(",")) {
      const noSpace = searchParams.q.replace(/ /g, "");
      const [city, country] = noSpace.split(",");
      //combine city and country in q
      searchParams = { q: `${city},${getCountryCode(country)}` };
    }

    const latlon = await getLatLonFromQuery({ q: searchParams.q, limit: 1 });

    searchParams = {
      lat: latlon[0].lat,
      lon: latlon[0].lon,
    };
  }

  const onecallData = await getWeatherData({
    ...searchParams,
    units: units,
    exclude: "minutely",
  });
  const currentData = onecallData.current;
  const locationData = await getLocationData(searchParams);

  const allData = {
    city: locationData[0].name,
    country: locationData[0].country,
    dt: currentData.dt,
    timezone: onecallData.timezone_offset,
    currentWeather: {
      main: currentData.weather[0].main,
      icon: currentData.weather[0].icon,
      temp: currentData.temp,
      feels_like: currentData.feels_like,
      humidity: currentData.humidity,
      wind: currentData.wind_speed,
      temp_min: onecallData.daily[0].temp.min,
      temp_max: onecallData.daily[0].temp.max,
      sunrise: currentData.sunrise,
      sunset: currentData.sunset,
      timezone: onecallData.timezone_offset,
    },
    hourly: onecallData.hourly.slice(1, 9).map((hour) => ({
      dt: hour.dt,
      icon: hour.weather[0].icon,
      temp: hour.temp,
    })),
    daily: onecallData.daily.map((day) => ({
      dt: day.dt,
      icon: day.weather[0].icon,
      temp_max: day.temp.max,
      temp_min: day.temp.min,
    })),
  };

  return allData;
};

const getDateTime = (dt, timezone, format = "hh:mm a") =>
  DateTime.fromSeconds(dt + timezone, {
    zone: "utc",
  }).toFormat(format);

const iconUrlFromCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

const getLatLonFromQuery = async (query) => {
  const url = new URL(GEO_URL);

  url.search = new URLSearchParams({
    q: query.q,
    limit: query.limit,
    appid: key,
  });

  const res = await fetch(url);
  return await res.json();
};

export default getAllWeatherData;

export { getDateTime, iconUrlFromCode };
