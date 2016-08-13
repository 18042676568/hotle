import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  return `/api${adjustedPath}?timestamp=${+new Date()}`;
}

function apiClient() {
  return (method, dispatch) =>
  (path, { params, data, headers } = {}) =>
  new Promise((resolve, reject) => {
    const request = superagent[method](formatUrl(path));

    if (headers) {
      request.set(headers);
    }

    if (params) {
      request.query(params);
    }

    if (data) {
      request.send(data);
    }

    request.end((err, { body, headers, status }) => {
      if (headers.token) {
        sessionStorage.setItem('token', headers.token);
      }

      if (err) {
        reject({ err, body, headers, status });
      } else {
        resolve(body);
      }
    });
  });
}

export default function (dispatch) {
  return methods.reduce(
    (client, method) => ({
      ...client,
      [method]: apiClient()(method, dispatch),
    }),
    {}
  );
}
