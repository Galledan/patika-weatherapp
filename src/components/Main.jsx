import React from "react";
import WeatherCard from "./WeatherCard";
import CitySelector from "./CitySelector";

function Main() {
  return (
    <div>
      <CitySelector />
      <WeatherCard />
    </div>
  );
}

export default Main;
