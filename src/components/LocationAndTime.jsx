import React from "react";
import { getDate, getTime } from "../services/weatherService";

function LocationAndTime({ weather: { timezone, city, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-3xl font-medium">
          {city}, {country}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center my-6">
        <p className="text-white text-xl font-extralight mx-3">
          {getDate(timezone)}
        </p>
        <p className="text-white text-xl font-extralight mx-3">
          {getTime(timezone)}
        </p>
      </div>
    </div>
  );
}

export default LocationAndTime;
