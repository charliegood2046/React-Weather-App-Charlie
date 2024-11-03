import "./styles.css";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Start coding to see some magic happen!</h2>
      <WeatherSearch />
    </div>
  );
}
