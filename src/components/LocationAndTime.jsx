import React from "react";
import { DateTime } from "luxon";
import { getDateTime } from "../services/weatherService";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

// https://dev.to/jorik/country-code-to-flag-emoji-a21
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function LocationAndTime({ weather: { timezone, city, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-3xl font-medium">
          {city}, {regionNames.of(country)} {getFlagEmoji(country)}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center my-2">
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

export { regionNames };
