import axios from 'axios';
const config = require('./config/config.js');
const token = config.token;
const url = config.server;
//axios.defaults.baseURL = config.server;
//axios.defaults.headers.common['Authorization'] = config.token;

const apiMaster = {
  getForecast: (city) => {
    console.log(`${url}?q=${city}&appid=${token}`)
    return axios
      .get(`${url}/forecast?q=${city}&appid=${token}&units=metric`)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      })
  },

  getCurrentWeather: (city) => {
    return axios
      .get(`${url}/weather?q=${city}&appid=${token}&units=metric`)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export default apiMaster;


// https://api.openweathermap.org/data/2.5/find?q=London&appid=b28b299373888e2964f50f45cbe15efa&units=metric
// https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Austin&appid=b28b299373888e2964f50f45cbe15efa