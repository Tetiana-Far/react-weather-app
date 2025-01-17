import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather mt-5">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              className="form-control"
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
          <h1>Kyiv</h1>
          <ul>
            <li>Friday 21:10, overcast clouds</li>
            <li>Humidity: 94%, Wind: 0.89km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <span className="temperature">3</span>
          <span className="degree">°C</span>
        </div>
      </div>
    </div>
  );
}
