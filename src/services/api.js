import axios from 'axios';

const api= axios.create({
  baseURL: "https://api.dividendos.me"
});


export default api;