import react, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function load() {
    let apiKey = "94dfd32atb684f11d63dcb32odcaff90";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="row">
        <div className="col">
          <ForecastDay forecast={forecast} />
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
