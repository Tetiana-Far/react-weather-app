import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="mt-3 text-center">
          <p>
            This project was coded by <a href="/">Tetiana Farafonova</a>, is{" "}
            <a href="/">open-sourced on GitHub</a> and{" "}
            <a href="/">hosted on Netlify</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
