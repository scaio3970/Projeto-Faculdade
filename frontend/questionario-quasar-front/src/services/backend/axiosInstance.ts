/* eslint-disable @typescript-eslint/no-unsafe-argument */
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
});
export default axiosInstance;
