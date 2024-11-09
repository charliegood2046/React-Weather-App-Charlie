import "./styles.css";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Start coding to see some magic happen!</h2>
      <WeatherSearch />
      <footer>
        Coded by Charlie G., hosted on{" "}
        <a
          href="https://github.com/charliegood2046/React-Weather-App-Charlie"
          target="_blank"
        >
          Github
        </a>{" "}
        and open-sourced.
      </footer>
    </div>
  );
}
