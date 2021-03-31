import React from 'react';
import DailyForecast from './DailyForecast.js';

function Forecast (props) {
  return (
    <div style = {{display: 'flex'}}>
      <DailyForecast forecast = {props.forecastData[0]}/>
      <DailyForecast forecast = {props.forecastData[1]}/>

      <DailyForecast forecast = {props.forecastData[2]}/>
      <DailyForecast forecast = {props.forecastData[3]}/>
    </div>
  )
}

export default Forecast;