import WeatherIcon from './WeatherIcon';
import helpers from './helpers.js';

function DailyForecast ({forecast, timezone}) {
  let inputDate = new Date(forecast.dt * 1000);
  let adjustedDate = helpers.getDate(timezone, inputDate);

  return (
    <div style = {{
      display: 'flex',
      flexDirection: 'column',
      margin: '15px',
      }}>

      {adjustedDate.getHours()}:00
      <WeatherIcon
        size = {50}
        iconNum={forecast.weather[0].icon}
      />
      {Math.round(forecast.main.temp)}°C

    </div>
  )
}

export default DailyForecast;