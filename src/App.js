import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import LocationAndTime from "./components/LocationAndTime";
import WeatherInfo from "./components/WeatherInfo";
import ForecastHourly from "./components/ForecastHourly";
import ForecastDaily from "./components/ForecastDaily";
import getAllWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("ankara");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getAllWeatherData({
        q: city,
        units: units,
        cnt: 7,
      }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [city, units]);

  return (
    <div className="py-5 px-32 min-h-screen max-h-full bg-gradient-to-br from-cyan-700 to-blue-700">
      <div className="mx-auto max-w-screen-md pt">
        <TopButtons setCity={setCity} />
        <Inputs setCity={setCity} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <LocationAndTime weather={weather} />
            <WeatherInfo weather={weather.currentWeather} />
            <ForecastHourly weather={weather} />
            <ForecastDaily weather={weather} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
