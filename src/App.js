import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer className="mt-3 text-center">
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Tetiana-Far"
              target="blank"
              rel="noopener noreferrer"
            >
              Tetiana Farafonova
            </a>
            , is{" "}
            <a
              href="https://github.com/Tetiana-Far/react-weather-app"
              target="blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://gentle-snickerdoodle-35cef9.netlify.app/"
              target="blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
