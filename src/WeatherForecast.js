import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import "./styles.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);}
  
    function load() {
       let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
      let apiKey ="094780c710fa4efd669f0df8c3991927";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);}
  
  
      if (loaded) {
        return (
          <div className="row row3" >
          {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                      return (
                     <div className="col cll"  key={index}>
                  <div className={ `ul${index}` } >
                  <WeatherForecastDay data={dailyForecast} unit={props.unit}  />
                  </div>
                  </div>
              
                );
                
              } else {
                return null;
              }
            })}
          </div>
        );
      } else {
        load();
        return null;
      }
    }
    
