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
          <p>Friday 21:10, overcast clouds</p>
          <p>Humidity: 94%, Wind: 0.89km/h</p>
        </div>
        <div className="col-6 text-end">
          <span className="temperature">3</span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
