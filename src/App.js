import { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import LocationAndTime from "./components/LocationAndTime";
import WeatherInfo from "./components/WeatherInfo";
import ForecastHourly from "./components/ForecastHourly";
import ForecastDaily from "./components/ForecastDaily";
import getAllWeatherData from "./services/weatherService";
import { ToastContainer, toast, Flip } from "react-toastify";
import { regionNames } from "./components/LocationAndTime";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "Toronto" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location";

      const id = toast.loading(`Fetching weather for ${message}...`);
      try {
        await getAllWeatherData({
          ...query,
          units: units,
          cnt: 8,
        }).then((data) => {
          toast.update(id, {
            render: `Weather for ${data.city}, ${regionNames.of(
              data.country
            )} fetched successfully!`,
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          setWeather(data);
        });
      } catch (error) {
        toast.update(id, {
          render: `Error fetching weather for ${message}!`,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="py-5 px-32 min-h-screen max-h-full bg-gradient-to-br from-cyan-700 to-blue-700">
      <div className="mx-auto max-w-screen-md pt">
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <LocationAndTime weather={weather} />
            <WeatherInfo weather={weather.currentWeather} />
            <ForecastHourly weather={weather} />
            <ForecastDaily weather={weather} />
          </div>
        )}

        <ToastContainer
          hideProgressBar={true}
          closeOnClick={false}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          transition={Flip}
        />
      </div>
    </div>
  );
}

export default App;
