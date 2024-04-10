import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use((requestConfig) => {
  const jwt = JSON.parse(window.localStorage.getItem('accessToken') ?? 'null');
  if (jwt) {
    requestConfig.headers.set('Authorization', `Bearer ${jwt}`);
    requestConfig.withCredentials = true;
  }
  return requestConfig;
});

export default axiosInstance;
