import React from "react";
import "./styles.css";

export default function Results2(props) {
  return (
    
 <div id="huwi">
 <br />
 <span className="sp6">&#9748;{"  "}</span>
 <span className="sp9" >{props.data.humidity} % </span>
 <br/>
 <span className="sp6">&#128168; {"  "}</span>
 <span className="sp9"id="wind">{Math.round(props.data.wind)} km/h</span>

</div>);}