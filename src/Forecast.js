import React from 'react';
import DailyForecast from './DailyForecast.js';

function Forecast (props) {
  return (
    <div style = {{display: 'flex'}}>
      <DailyForecast forecast = {props.forecastData[0]} timezone = {props.timezone}/>
      <DailyForecast forecast = {props.forecastData[1]} timezone = {props.timezone}/>
      <DailyForecast forecast = {props.forecastData[2]} timezone = {props.timezone}/>
      <DailyForecast forecast = {props.forecastData[3]} timezone = {props.timezone}/>
      <DailyForecast forecast = {props.forecastData[4]} timezone = {props.timezone}/>
    </div>
  )
}

export default Forecast;