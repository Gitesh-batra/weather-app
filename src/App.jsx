import "./App.css";
import RightPart from "./components/RightPart";
import LeftPart from "./components/LeftPart";
import getFormattedWeatherData from "./components/services/weatherService";
import { useEffect, useState } from "react";
function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="App">
      {/* <UilReact /> */}
      <video
        className="video"
        src="/images/videos/rain.mp4"
        autoPlay
        muted
        loop
      />

      {weather && (
        <div className="component">
          <div>
          <LeftPart className="left" weather={weather} />
          </div>
          <div>
          <RightPart className="right" weather={weather} />
          </div>
         </div>
      )}
    </div>
  );
}

export default App;
