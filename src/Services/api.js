import axios from 'axios';

const api = axios.create({
  baseURL: 'https://send-mail-segmatech.herokuapp.com',
})

export default api;