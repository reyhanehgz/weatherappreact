
import React from 'react';
import './styles.css';
import Search from "./Search.js";



export default function App() {
  return (
    <div className="App">
      <div className=' d1'>
        <Search defaultCity="Tehran" />
        </div>
        <footer id="divg"> This project was coded by {" "}
          <a
              href="https://"
              target="_blank"
              rel="noopener noreferrer"
          >
              Reyhaneh Gorjizadeh
          </a>{" "}
            and is{" "}
          <a
              href="https://github.com/reyhanehgz/weatherappreact.git"
              target="_blank"
              rel="noopener noreferrer"
          >
              open-sourced on GitHub
          </a>{" "}
            and{" "}
          <a
              href="https://reactweatherapp1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
          >
              hosted on Netlify
          </a>
        </footer>
      
    </div>
  );
}


