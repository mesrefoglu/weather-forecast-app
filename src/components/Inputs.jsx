import React, { useState } from "react";
import { UilMapMarkerAlt } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [textbox, setTextbox] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setQuery({ q: textbox });
      setTextbox("");
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat: lat, lon: lon });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center pt-2 my-3">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={textbox}
          onChange={(e) => setTextbox(e.currentTarget.value)}
          onKeyUp={handleKeyPress.bind(this)}
          type="text"
          placeholder="enter a city name..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none"
        />
        <UilMapMarkerAlt
          size={25}
          onClick={handleLocationClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row items-center justify-center ml-8">
        <button className="flex flex-row items-center justify-center transition ease-out hover:scale-125">
          <div name="metric" className="text-xl text-white font-light">
            &deg;C
          </div>
          <p className="text-xl text-white mx-3">/</p>
          <div name="imperial" className="text-xl text-white font-light">
            &deg;F
          </div>
        </button>
      </div>
    </div>
  );
}

export default Inputs;
