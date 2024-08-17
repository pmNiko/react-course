import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL, VITE_MODE } = getEnvVariables();

// console.log({ VITE_MODE });

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };

  return config;
});

export default calendarApi;
