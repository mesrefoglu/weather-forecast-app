import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import LocationAndTime from "./components/LocationAndTime";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";

function App() {
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
