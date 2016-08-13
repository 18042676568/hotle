import * as actions from '../constants/ActionTypes';

export function getSecondList() {
  return {
    types: [
      actions.HOMEPAGE_REQUEST,
      actions.HOMEPAGE_REQUEST_SUCC,
      actions.HOMEPAGE_REQUEST_FAIL,
    ],
    request: (client) => client.get(
      '/sites',
      {}
    ),
  };
}
