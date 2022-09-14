import React from "react";
import { getDateTime, iconUrlFromCode } from "../services/weatherService";

function ForecastDaily({ weather: { daily, timezone } }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-5">
        <p className="text-white font-medium">DAILY FORECAST</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row items-center justify-between text-white">
        {daily.slice(1).map((day) => (
          <div
            key={day.dt}
            className="flex flex-col items-center justify-center w-24"
          >
            <p className="font-light text-sm">
              {getDateTime(day.dt, timezone, "cccc")}
            </p>
            <img src={iconUrlFromCode(day.icon)} className="w-12 my-1" alt="" />
            <p className="font-medium">
              {day.temp_min.toFixed()}&deg; | {day.temp_max.toFixed()}&deg;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastDaily;
