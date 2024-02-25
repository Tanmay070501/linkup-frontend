import axios, { InternalAxiosRequestConfig } from 'axios';
import store from '../redux/store';
import { toast } from 'react-toastify';

const axiosInstance = axios.create();

// Added a request interceptor to add bearer token
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get the bearer token
    const token = store.getState().authReducer.accessToken
    if (token) {
      // If token exists, add it to the Authorization header
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  toast.error(error.response.data.message || "Something went wrong!")
  return Promise.reject(error);
});

export default axiosInstance;
