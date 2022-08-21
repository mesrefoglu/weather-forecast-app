import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTemperatureHalf,
  UilTemperatureEmpty,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function WeatherInfo() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Sunny</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center justify-between w-11/12 text-white py-3">
          <img
            src="https://img.icons8.com/color/48/000000/sun.png"
            alt="sun"
            className="w-20 mx-9"
          />
          <p className="text-5xl">20&deg;</p>
          <div className="flex flex-col space-y-2 w-36">
            <div className="flex font-light text-sm items-center justify-center">
              <UilTemperatureHalf size={18} className="mr-1" />
              Feels like:
              <span className="font-medium ml-1">20&deg;</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilTear size={18} className="mr-1" />
              Humidity:
              <span className="font-medium ml-1">100%</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilWind size={18} className="mr-1" />
              Wind:
              <span className="font-medium ml-1">11 km/h</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center justify-between w-5/6 ml-9 text-white text-sm py-3">
          <div className="flex flex-row items-center space-x-2 justify-center">
            <UilSun />
            <p className="font-light">
              Rise: <span className="font-medium ml-1">06:45 AM</span>
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2 justify-center">
            <UilSunset />
            <p className="font-light">
              Set: <span className="font-medium ml-1">08:45 PM</span>
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2 justify-center">
            <UilTemperature />
            <p className="font-light">
              High: <span className="font-medium ml-1">30&deg;</span>
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2 justify-center">
            <UilTemperatureEmpty />
            <p className="font-light">
              Low: <span className="font-medium ml-1">10&deg;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
