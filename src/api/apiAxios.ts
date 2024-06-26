import axios from 'axios';
import { getCookie } from '../utils/Cookies';

const token = getCookie('Accesstoken');
/* eslint-disable @typescript-eslint/no-explicit-any */

const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_HOST,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

apiAxios.interceptors.request.use(config => {
  const { headers } = config;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  (error: any) => Promise.reject(error);

  return config;
});

apiAxios.interceptors.response.use(config => {
  const a = config;

  return a;
});

export default apiAxios;
