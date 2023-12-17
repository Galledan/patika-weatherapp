import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (selectedCity) {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=95efed690003408c960103434231712&q=${selectedCity}&days=7`
        );

        const { forecast } = response.data;
        const formattedData = forecast.forecastday.map((day) => ({
          date: day.date,
          icon: day.day.condition.icon,
          maxTemp: day.day.maxtemp_c,
          minTemp: day.day.mintemp_c,
        }));

        updateWeatherData(formattedData);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const value = {
    weatherData,
    selectedCity,
    updateWeatherData: (city) => setSelectedCity(city),
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);

  return context;
};

export { WeatherProvider, useWeather };
