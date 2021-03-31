import axios from 'axios';
const url = 'http://localhost:3001'

const apiMaster = {
  getForecast: (city) => {
    return axios.get(`${url}/forecast`, { params: { city: city }});
  },

  getWeather: (city) => {
    return axios.get(`${url}/weather`, { params: { city: city }});
  },
}

export default apiMaster;


