import {AxiosInstance} from './axios_config';
import {BASE_URL} from '../constants/constants';
// import axios from 'axios';
import {useSelector} from 'react-redux';

async function Post(path, data, token = null) {
  return await AxiosInstance(token).post(path, data);
  //   let url = BASE_URL + path;
  //   console.log('url===', url, data, token);

  //   var config = {
  //     method: 'post',
  //     url: url,
  //     headers: token
  //       ? {
  //           'Content-Type': 'application/json',
  //           Authorization: `${token}`,
  //         }
  //       : {},

  //     data: data,
  //   };

  //   let response = await axios(config);

  //   return response.data;
  //   // axios(config)
  //   // .then(function (response) {
  //   //   console.log(JSON.stringify(response.data));
  //   // })
  //   // .catch(function (error) {
  //   //   console.log(error);
  //   // });
}

async function Patch(path, data, token = null) {
  return await AxiosInstance(token).patch(path, data);
  // return await axiosInstance.patch(path, data);
}

async function Get(path, data, token = null) {
  return await AxiosInstance(token).get(path, data);
}

async function Put(path, data, token) {
  let url = BASE_URL + path;
  // console.log('url===>', url, 'token', token)
  // console.log('data', data2, 'token', token);

  let response = await axios.put(url, data, {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  });
  // console.log('api password update respoinse', response);

  return response.data;
}

async function Delete(path, data, token) {
  let url = BASE_URL + path;
  console.log('url put===++++++++++++++++', url, 'token', token);

  let response = await axios.delete(url, {
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  });

  return response.data;
}
export {Post, Get, Put, Delete, Patch};
