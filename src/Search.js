import React, { useState } from "react";
import axios from "axios";
import Results2 from "./results2";
import Results3 from "./results3";
import Results from "./Results";
import "./styles.css";
import WeatherForecast from "./WeatherForecast";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
     
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      forcasrr:response.data.daily
    });
  }

  function handleSubmit(event) {
		event.preventDefault();
		searchh();
	}
  function handleCity(event) {
    setCity(event.target.value);
  }

  function searchh() {
    let apiKey ="4c460e12227e0adc59e5cb4d5f357a1d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey ="4c460e12227e0adc59e5cb4d5f357a1d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function findLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  } 

  if (weatherData.ready) {
    return (
      <div className=" d2 ">
        <div className="row row1">
        <Results data={weatherData} />
        <Results3 data={weatherData} celsius={weatherData.temperature} unit={unit} setUnit={setUnit} />
        <div className='col-3 '>
        <form id="forms" onSubmit={handleSubmit}>
            <input type="search" id="query" placeholder="City Search" onChange= {handleCity} />
            <button type="submit" id="b1"   aria-label="Aria Name" >
             <i className="fa fa-search"></i>
            </button>
        </form>

        <br />
    <button id="cl2"   type="submit" onClick={findLocation } > 📍 </button>
    <br/> 
    <br />

        <Results2 data={weatherData} />
     </div>
     </div>
     

     <div className="row row2">
     <div className="dp">
       
       <WeatherForecast unit={unit}  coordinates={weatherData.coordinates} /> 
      </div>
      </div>
    </div>
    );
  } else {
    searchh();
    return "Loading...";
  }
}
