import axios from 'axios';
//const url = 'http://localhost:3001'

const apiMaster = {
  getForecast: (city) => {
    return axios.get(`./forecast`, { params: { city: city }});
  },

  getWeather: (city) => {
    return axios.get(`./weather`, { params: { city: city }});
  },
}

export default apiMaster;


