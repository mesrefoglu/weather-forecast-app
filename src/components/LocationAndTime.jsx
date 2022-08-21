import React from "react";
import { DateTime } from "luxon";
import { getDateTime } from "../services/weatherService";

function LocationAndTime({ weather: { dt, timezone, city, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-3xl font-medium">
          {city}, {country}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center my-6">
        <p className="text-white text-xl font-extralight mx-3">
          {getDateTime(
            DateTime.utc().toSeconds(),
            timezone,
            "cccc, d LLLL yyyy"
          )}
        </p>
        <p className="text-white text-xl font-extralight mx-3">
          {getDateTime(DateTime.utc().toSeconds(), timezone)}
        </p>
      </div>
    </div>
  );
}

export default LocationAndTime;
