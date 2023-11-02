import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL:
    "http://ec2-13-212-78-52.ap-southeast-1.compute.amazonaws.com:3033/api/",
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    throw error;
  },
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    throw error;
  },
);

export default axiosClient;