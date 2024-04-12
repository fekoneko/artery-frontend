import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Upgrade-Insecure-Requests': '1',
  },
  withCredentials: true,
});

export default axiosInstance;
