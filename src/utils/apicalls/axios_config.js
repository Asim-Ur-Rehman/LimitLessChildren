import axios from 'axios';
import {BASE_URL} from '../constants/constants';

export const AxiosInstance = token => {
  const axiosConfig = axios.create({});

  axiosConfig.interceptors.request.use(request => {
    const includes = [`${BASE_URL}user`, `${BASE_URL}auth/login`];
    if (!request.url.includes(includes))
      request['headers']['Authorization'] = `Bearer ${token}`;
    return request;
  });

  return axiosConfig;
};
