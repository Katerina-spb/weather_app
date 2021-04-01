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
  const [timezone, setTimezone] = useState('');

  const getForecast = () => {
    apiMaster.getForecast(city)
    .then((response) => {
      setForecast(response.data.list);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const getWeather = () => {
    apiMaster.getWeather(city)
    .then((response) => {
      setCurrentWeather(response.data);
      //console.log(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getWeather();
  }, [city]);

  useEffect(() => {
    getForecast();
  }, [city]);

  function handleSearch (newCity) {
    setCity(newCity);
  }

  if (currentWeather && forecast) {
    return (
      <div className="App">
        <Search handleSearch = {handleSearch}/>
        <div className = 'city_weather'>
          <City city = {city} timezone = {currentWeather.timezone}/>
          <WeatherData data = {currentWeather}/>
        </div>
        <Forecast forecastData = {forecast} timezone = {currentWeather.timezone}/>
      </div>
    );
  } else {
    return 'Loading...'
  }
}

export default App;
