import apiClient from '../helpers/apiClient';

export default function clientMiddleware() {
  return ({ dispatch, getState }) => {
    const client = apiClient(dispatch);
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { request, types, ...rest } = action;
      if (!request) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      next({ ...rest, type: REQUEST });

      const actionPromise = request(client);
      actionPromise.then(
        (result) => next({ ...rest, result, type: SUCCESS }),
        (error) => next({ ...rest, error, type: FAILURE })
      ).catch((error) => {
        console.log('MIDDLEWARE ERROR:', error);
        next({ ...rest, error, type: FAILURE });
      });

      return actionPromise;
    };
  };
}
