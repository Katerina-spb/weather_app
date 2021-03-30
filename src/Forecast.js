import React from 'react';
import DailyForecast from './DailyForecast.js';

function Forecast () {
  return (
    <div style = {{display: 'flex'}}>
      <DailyForecast />
      <DailyForecast />

      <DailyForecast />
      <DailyForecast />
    </div>
  )
}

export default Forecast;