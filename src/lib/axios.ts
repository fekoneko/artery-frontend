import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use((requestConfig) => {
  const jwt = localStorage.getItem('accessToken');
  if (jwt) {
    requestConfig.headers.set('Authorization', `Bearer ${jwt}`);
    requestConfig.withCredentials = true;
  }
  return requestConfig;
});

export default axiosInstance;
