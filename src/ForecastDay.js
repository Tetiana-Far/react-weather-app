import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  let date = new Date(props.forecast[1].time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  let maxTemperature = Math.round(props.forecast[1].temperature.maximum);
  let minTemperature = Math.round(props.forecast[1].temperature.minimum);
  return (
    <div className="ForecastDay">
      <div className="forecastDate mb-1">{day}</div>
      <WeatherIcon size={32} name={props.forecast[1].condition.icon} />
      <br />
      <span className="me-3 maxTemp">{maxTemperature}</span>
      <span className="minTemp">{minTemperature}</span>
    </div>
  );
}
