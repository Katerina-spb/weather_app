import React from 'react';

function WeatherData (props) {
  console.log('PROPS',props)
  return (
    <div style = {{
      margin: '15px'
    }}>
      <img alt = 'sun'></img>
      {/* <span> {Math.floor(props.data.main.temp)} °C|°F</span> */}

      <ul style = {{
        listStyleType: 'none',
        padding: '0px'
        }}>
        <li>{props.data.weather[0].main}</li>
        <li>Humidity: {props.data.main.humidity}%</li>
        <li>Wind: {Math.floor(props.data.wind.speed)} km/hr</li>
      </ul>

    </div>
  )
}

export default WeatherData;