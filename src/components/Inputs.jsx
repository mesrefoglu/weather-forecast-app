import React, { useState } from "react";
import { toast } from "react-toastify";
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
      const id = toast.loading("Getting your location...");
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          setQuery({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          toast.update(id, {
            render: "Got your location successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
        });
      } catch (error) {
        toast.update(id, {
          render: "Could not get your location!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    }
  };

  const handleUnitChange = () => {
    setUnits(units === "imperial" ? "metric" : "imperial");
  };

  return (
    <div className="flex flex-row justify-around pt-2 my-3">
      <div className="flex flex-row w-2/3 items-center justify-center space-x-4">
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

      <div className="flex flex-row items-center w-20 justify-center ml-8">
        <button
          onClick={handleUnitChange}
          className="flex flex-row items-center justify-center"
        >
          <div
            name="metric"
            className={
              "text-xl text-white " +
              (units === "metric" ? "font-bold" : "font-light")
            }
          >
            &deg;C
          </div>
          <p className="text-xl text-white mx-3">{" / "}</p>
          <div
            name="imperial"
            className={
              "text-xl text-white " +
              (units === "metric" ? "font-light" : "font-bold")
            }
          >
            &deg;F
          </div>
        </button>
      </div>
    </div>
  );
}

export default Inputs;
