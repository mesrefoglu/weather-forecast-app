import React from "react";

function LocationAndTime() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-3xl font-medium">Toronto, ON</p>
      </div>
      <div className="flex flex-row items-center justify-center my-6">
        <p className="text-white text-xl font-extralight mx-3">
          Friday August 19, 2022
        </p>
        <p className="text-white text-xl font-extralight mx-3">11:27 PM</p>
      </div>
    </div>
  );
}

export default LocationAndTime;
