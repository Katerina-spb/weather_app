import React from 'react';

function WeatherData () {
  return (
    <div style = {{
      margin: '15px'
    }}>
      <img alt = 'sun'></img>
      <span>+18 C|F</span>

      <ul style = {{
        listStyleType: 'none',
        padding: '0px'
        }}>
        <li>Sunny</li>
        <li>Humidity: 20%</li>
        <li>Wind: 3 km/hr</li>
      </ul>

    </div>
  )
}

export default WeatherData;