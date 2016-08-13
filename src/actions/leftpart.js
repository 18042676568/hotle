import * as actions from '../constants/ActionTypes';

export function showStory() {
  return {
    type: actions.LEFT_STORY_MOVE_ON,
  };
}
export function showActivity() {
  return {
    type: actions.LEFT_ACTIVITY_MOVE_ON,
  };
}
export function showParty() {
  return {
    type: actions.LEFT_PARTY_MOVE_ON,
  };
}
export function showMine() {
  return {
    type: actions.LEFT_MINE_MOVE_ON,
  };
}
export function showConnect() {
  return {
    type: actions.LEFT_CONNECT_MOVE_ON,
  };
}
export function hideStory() {
  return {
    type: actions.LEFT_STORY_MOVE_OUT,
  };
}
export function hideActivity() {
  return {
    type: actions.LEFT_ACTIVITY_MOVE_OUT,
  };
}
export function hideParty() {
  return {
    type: actions.LEFT_PARTY_MOVE_OUT,
  };
}
export function hideMine() {
  return {
    type: actions.LEFT_MINE_MOVE_OUT,
  };
}
export function hideConnect() {
  return {
    type: actions.LEFT_CONNECT_MOVE_OUT,
  };
}
export function moveOut() {
  return {
    type: actions.HIDE_LEFT_APPEAR_BOX,
  };
}
export function getPage() {
  return {
    types: [
      actions.GET_PAGE_REQUEST,
      actions.GET_PAGE_REQUEST_SUCC,
      actions.GET_PAGE_REQUEST_FAIL,
    ],
    request: (client) => client.get(
      '/sites',
      {}
    ),
  };
}
export function leftdefaultEnter() {
  return {
    type: actions.SHOW_LEFT_DIA,
  };
}
export function leftdefaultLeave() {
  return {
    type: actions.HIDE_LEFT_DIA,
  };
}
