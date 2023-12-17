import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Main />
      Powered by{" "}
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        WeatherAPI.com
      </a>
    </div>
  );
}

export default App;
