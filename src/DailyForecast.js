import WeatherIcon from "./WeatherIcon";

function DailyForecast ({forecast}) {
  return (
    <div style = {{
      display: 'flex',
      flexDirection: 'column',
      margin: '15px',
      }}>

      {new Date(forecast.dt * 1000).getHours()}:00
      <WeatherIcon
        size = {50}
        iconNum={forecast.weather[0].icon}
      />
      {Math.round(forecast.main.temp)}°C

    </div>
  )
}

export default DailyForecast;