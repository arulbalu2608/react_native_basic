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
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjMzZmNhZWZlZDBkNWM1OTQxNTI1ZWUwIiwidHlwZSI6IlNUQUZGIiwiaWF0IjoxNjY1MjM2NzM2fQ.324ca0NP5Puu6axq56MJuZWYIRViE_TG7NnP_9NiY-I ',
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
