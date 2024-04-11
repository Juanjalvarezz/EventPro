import axios from 'axios';

const token = (typeof localStorage !== 'undefined') ? localStorage.getItem('token') || '' : '';

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    'Authorization': token,
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;