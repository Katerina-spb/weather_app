import './App.css';
import Search from './Search.js';
import City from './City.js';
import WeatherData from './WeatherData.js';
import Forecast from './Forecast.js';
import { useState, useEffect } from 'react';
import apiMaster from './apiMaster.js';

function App() {
  const [currentWeather, setCurrentWeather] = useState(false);
  const [forecast, setForecast] = useState(false);
  const [city, setCity] = useState('Austin');

  const getWeather = () => {
    apiMaster.getForecast(city)
    .then((response) => {
      setForecast(response.data.list);
      console.log(response.data.list)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const getForecast = () => {
    apiMaster.getWeather(city)
    .then((response) => {
      setCurrentWeather(response.data);
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getWeather();
  }, []);

  useEffect(() => {
    getForecast();
  }, []);

  if (currentWeather) {
    return (
      <div className="App">
        <Search />
        <div className = 'city_weather'>
          <City city = {city} />
          <WeatherData data = {currentWeather}/>
        </div>
        <Forecast forecastData = {forecast} />
      </div>
    );
  } else {
    return 'Loading...'
  }
}

export default App;
