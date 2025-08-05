import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;
    if (
      err.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem('refreshToken')
    ) {
      originalRequest._retry = true;
      console.log('Refreshing token...');
      try {
        const res = await axios.post(BASE_URL + '/auth/refresh', {
          refreshToken: localStorage.getItem('refreshToken'),
        });

        console.log('New access token received:', res.data.accessToken );
        localStorage.setItem('accessToken', res.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;

        console.log('Retrying original request with new access token');
        return API(originalRequest);
      } catch (refreshErr) {
        console.error('Refresh token failed:', refreshErr);
        localStorage.clear(); // force logout
        //window.location.href = '/login';
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(err);
  }
);

export default API;
