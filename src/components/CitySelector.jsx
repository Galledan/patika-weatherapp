// CitySelector.js
import React, { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import cities from "../data/cities.json";

const CitySelector = () => {
  const { updateWeatherData } = useWeather();

  useEffect(() => {
    handleCityChange(cities[0].value);
  }, []);

  const handleCityChange = async (selectedCity) => {
    updateWeatherData(selectedCity);
  };

  return (
    <div>
      <select onChange={(e) => handleCityChange(e.target.value)}>
        {cities.map((city) => (
          <option key={city.value} value={city.value}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
