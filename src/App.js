import "./styles.css";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Start coding to see some magic happen!</h2>
      <WeatherSearch />
      <footer>Coded by Charlie G., hosted on Github and open-sourced.</footer>
    </div>
  );
}
