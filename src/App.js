import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import LocationAndTime from "./components/LocationAndTime";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import getAllWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [city] = useState("toronto");
  const [units] = useState("metric");
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
        <TopButtons />
        <Inputs />

        {weather && (
          <div>
            <LocationAndTime weather={weather} />
            <Forecast title="hourly forecast" weather={weather} />
            <Forecast title="daily forecast" weather={weather} />
            <WeatherInfo weather={weather.currentWeather} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
