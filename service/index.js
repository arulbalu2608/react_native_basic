import axios from 'axios';

export const request = ({url, method, data, params}) =>
  new Promise((resolve, reject) => {
    let config = {
      url,
      method,
      data: data ?? null,
      params: params ?? null,
      headers: {
        Authorization:
        'Content-Type': 'application/json',
      },
    };
    console.log(config, 'request');
    axios(config)
      .then(response => {
        return resolve(response);
      })
      .catch(error => {
        return reject(error);
      });
  });
