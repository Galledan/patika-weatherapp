import React from "react";
import { useWeather } from "../context/WeatherContext";

const WeatherCard = () => {
  const { weatherData } = useWeather();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const getDateName = (date) => {
    const days = [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar",
    ];
    const dateValue = new Date(date);
    return days[dateValue.getDay()];
  };

  return (
    <div>
      <h2>Hava Durumu</h2>
      <div className="days">
        {weatherData.map((dayData) => (
          <div className="day" key={dayData.name}>
            <p>{getDateName(dayData.date)}</p>
            <img src={dayData.icon} alt="icon" />
            <p>{dayData.maxTemp} °C</p>
            <p>{dayData.minTemp} °C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
