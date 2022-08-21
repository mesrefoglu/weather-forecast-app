import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import LocationAndTime from "./components/LocationAndTime";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import getAllWeatherData from "./services/weatherService";

function App() {
  const fetchWeather = async (city, units) => {
    const data = await getAllWeatherData({
      q: city,
      units: units,
      cnt: 7,
    });
    console.log(data);
  };

  fetchWeather("toronto", "metric");

  return (
    <div className="py-5 px-32 min-h-screen max-h-full bg-gradient-to-br from-cyan-700 to-blue-700">
      <div className="mx-auto max-w-screen-md pt">
        <TopButtons />
        <Inputs />
        <LocationAndTime />
        <WeatherInfo />
        <Forecast title="hourly forecast" />
        <Forecast title="daily forecast" />
      </div>
    </div>
  );
}

export default App;
