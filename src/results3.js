import React from "react";
import "./Results.css";
import "./styles.css";
import WeatherIcon from "./WeatherIcon" ;
export default function Results3(props) {
  function displayFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  if (props.unit === "celsius") {
  return (
    
    <div className='col-6'>
      <div className="div1">
        <span className="sp0"> TODAY  </span>
        <span className="sp1" title="0"   style={{ backgroundColor:' rgb(190, 187, 187) '}}onClick={displayCelsius}  
 > C </span>
        <span className="sp2" onClick={displayFahrenheit}  style={{ backgroundColor: "white" }}>F</span>
      </div>
      <div className="div2">
        <div className="sp4"></div>
        <div className="sp5">&nbsp; { props.data.city} </div>
      </div> 
      <div className="div3">
         <WeatherIcon code={props.data.icon} size={40} />
        
         {"    "}<span className="sp7">  {Math.round(props.celsius)}  ° </span>
        <span className="sp8"></span> 
        <br/><br/>
         <p id="wdescription"> {props.data.description}</p> 
      </div>
      </div>



);}
else {
  let fahrenheit = (props.celsius * 9 / 5) + 32;
  return (
    
    <div className='col-6'>
      <div className="div1">
        <span className="sp0"> TODAY  </span>
        <span className="sp1" title="0"  style={{ backgroundColor: "white" }} onClick={displayCelsius}   
 > C </span>
        <span className="sp2" onClick={displayFahrenheit} style={{ backgroundColor: 'rgb(190, 187, 187) '}}>F</span>
      </div>
      <div className="div2">
        <div className="sp4"></div>
        <div className="sp5">&nbsp; { props.data.city} </div>
      </div> 
      <div className="div3">
  
        <img src= {`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
          alt = { `${props.data.description}`}
          width="42"
        />  {"    "}<span className="sp7">   {Math.round(fahrenheit)}  ° </span>
        <span className="sp8"></span> 
        <br/><br/>
         <p id="wdescription"> {props.data.description}</p> 
      </div>
      </div>



);}


}

