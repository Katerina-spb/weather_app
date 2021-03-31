import React from 'react';
import WeatherIcon from './WeatherIcon.js';
import './WeatherData.css';

function WeatherData (props) {
  console.log('PROPS',props)
  return (
    <div id = 'data_container'>

      <WeatherIcon iconNum={props.data.weather[0].icon} />
      <span id = 'temp'> {Math.floor(props.data.main.temp)}</span><span id = 'units'> °C|°F </span>

      <ul id = 'list'>
        <li>{props.data.weather[0].main}</li>
        <li>Humidity: {props.data.main.humidity}%</li>
        <li>Wind: {Math.floor(props.data.wind.speed)} km/hr</li>
      </ul>

    </div>
  )
}

export default WeatherData;