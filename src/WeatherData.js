import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon.js';
import './WeatherData.css';

function WeatherData (props) {

  //const [units, setUnits] = useState('celsius');
  const [isCelsius, setIsCelsius] = useState(true);
  let celsius = Math.round(props.data.main.temp);
  let fahrenheit = Math.round((props.data.main.temp * 9) / 5 + 32);

  // function toCelsius (e) {
  //   e.preventDefault();
  //   setUnits('celsius');
  // }
  // function toFahrenheit (e) {
  //   e.preventDefault();
  //   setUnits('fahrenheit');
  // }

  function switchUnits (e) {
    e.preventDefault();
    setIsCelsius(!isCelsius);
  }

  console.log('PROPS',props)
  return (
    <div id = 'data_container'>

      <WeatherIcon iconNum={props.data.weather[0].icon} />
      {isCelsius
      ? <span id = 'temp'> {celsius}<span id = 'units'> °C|<a href = '/' onClick = {switchUnits}>°F</a></span></span>
      : <span id = 'temp'> {fahrenheit}<span id = 'units'> <a href = '/' onClick = {switchUnits}>°C</a>|°F </span></span>
      }

      <ul id = 'list'>
        <li>{props.data.weather[0].main}</li>
        <li>Humidity: {props.data.main.humidity}%</li>
        <li>Wind: {Math.floor(props.data.wind.speed)} km/hr</li>
      </ul>

    </div>
  )
}

export default WeatherData;