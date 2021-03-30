import './App.css';
import Search from './Search.js';
import City from './City.js';
import WeatherData from './WeatherData.js';
import Forecast from './Forecast.js';

function App() {
  return (
    <div className="App">
      <Search />
      <div className = 'city_weather'>
        <City />
        <WeatherData />
      </div>
      <Forecast />
    </div>
  );
}

export default App;
