import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherInfo, setWeatherInfo] = useState({
    loaded: false,
    city: props.defaultCity,
  });

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "94dfd32atb684f11d63dcb32odcaff90";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherInfo({
      loaded: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      time: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }
  if (weatherInfo.loaded) {
    return (
      <div className="Weather mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                className="form-control"
                onChange={changeCity}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>{weatherInfo.city}</h1>
            <p>Friday 21:10, {weatherInfo.description}</p>
            <p>
              Humidity: {weatherInfo.humidity}%, Wind: {weatherInfo.wind} km/h
            </p>
          </div>
          <div className="col-6 text-end">
            <span className="temperature">
              {Math.round(weatherInfo.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
