import React from "react";
import "./WeatherForecast.css";
import "./styles.css";
import WeatherIcon from './WeatherIcon';
export default function WeatherForecastDay(props) {

  function cmaxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function cminTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function fmaxTemp() {
    let temperature = Math.round((props.data.temp.max * 9) / 5 + 32);
    return `${temperature}°`;
  }
  function fminTemp() {
    let temperature = Math.round((props.data.temp.min * 9) / 5 + 32);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }


  if (props.unit === "celsius") {
  
    return (
    <div className="col" >
    <ul>
      < li><strong>{day()} </strong></li>
            <li className="icon">  <WeatherIcon code={props.data.weather[0].icon} /></li>
            <li><span className="s1" >{cminTemp()} </span > <span className="s2">  {cmaxTemp()} </span > </li>
        </ul>
 
</div>


    ) } else { return(
      <div className="col">
    <ul>
      < li><strong>{day()} </strong></li>
            <li className="icon">  <WeatherIcon code={props.data.weather[0].icon} /></li>
            <li><span className="s1" >{fminTemp()} </span > &nbsp; &nbsp; <span className="s2">  {fmaxTemp()}</span> </li>
        </ul>
 
</div>
    );}}
 
 
 
   
