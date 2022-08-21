import React from "react";

function ForecastDaily() {
  return (
    <div>
      <div className="flex items-center justify-start mt-10">
        <p className="text-white font-medium">DAILY FORECAST</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">20&deg;</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">5:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">20&deg;</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">6:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">20&deg;</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">7:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">20&deg;</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">8:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">20&deg;</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">9:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">20&deg;</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">9:00 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            className="w-12 my-1"
            alt=""
          />
          <p className="font-medium">20&deg;</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastDaily;
