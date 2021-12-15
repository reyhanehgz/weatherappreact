import React from "react";
import "./Results.css";
import FormattedDate from "./FormattedDate.js";
import "./styles.css";

export default function Results(props) {
  return (
       
  
        <div className='col-3 dat1'><br/>
        <br />
            <h6 id="time1"><FormattedDate date={props.data.date} /> </h6>
          
     
            <br/>
            <br />
            <br />
         </div>
        
       
  ); }
    
    


   


    



