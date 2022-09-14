import React from "react";
import { getDateTime, iconUrlFromCode } from "../services/weatherService";
import {
  UilTemperature,
  UilTemperatureHalf,
  UilTemperatureEmpty,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function WeatherInfo({
  weather: {
    icon,
    main,
    temp,
    feels_like,
    humidity,
    wind,
    sunrise,
    sunset,
    timezone,
    temp_max,
    temp_min,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center justify-between w-11/12 text-white py-1">
          <div className="flex flex-row w-44 justify-between">
            <img src={iconUrlFromCode(icon)} alt="sun" />
            <div className="flex items-center justify-center text-xl text-cyan-300">
              <p>{main}</p>
            </div>
          </div>
          <p className="text-5xl">{temp.toFixed()}&deg;</p>
          <div className="flex flex-col space-y-2 w-36">
            <div className="flex font-light text-sm items-center justify-center">
              <UilTemperatureHalf size={18} className="mr-1" />
              Feels like:
              <span className="font-medium ml-1">
                {feels_like.toFixed()}&deg;
              </span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilTear size={18} className="mr-1" />
              Humidity:
              <span className="font-medium ml-1">{humidity.toFixed()}%</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilWind size={18} className="mr-1" />
              Wind:
              <span className="font-medium ml-1">{wind.toFixed()} km/h</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center justify-between w-5/6 text-white text-sm">
          <div className="flex flex-row items-center space-x-2 justify-center">
            <UilSun />
            <p className="font-light">
              Rise:{" "}
              <span className="font-medium ml-1">
                {getDateTime(sunrise, timezone)}
              </span>
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2 justify-center">
            <UilSunset />
            <p className="font-light">
              Set:{" "}
              <span className="font-medium ml-1">
                {getDateTime(sunset, timezone)}
              </span>
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2 justify-center">
            <UilTemperatureEmpty />
            <p className="font-light">
              Low:{" "}
              <span className="font-medium ml-1">
                {temp_min.toFixed()}&deg;
              </span>
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2 justify-center">
            <UilTemperature />
            <p className="font-light">
              High:{" "}
              <span className="font-medium ml-1">
                {temp_max.toFixed()}&deg;
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
