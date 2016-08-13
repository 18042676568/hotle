import * as actions from '../constants/ActionTypes';

const initialState = {
  storydialog: false,
  activitydialog: false,
  partydialog: false,
  minedialog: false,
  connectdialog: false,
  showleftpage: 0,
  leftdialoglist: [],
  titles: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.HOMEPAGE_REQUEST_SUCC:
      return {
        ...state,
        list: action.result,
      };
    case actions.HOMEPAGE_REQUEST_FAIL:
      return {
        ...state,
        err: action.err,
      };
    case actions.SHOW_LEFT_DIA:
      return {
        ...state,
        showleftpage: true,
      };
    case actions.HIDE_LEFT_DIA:
      return {
        ...state,
        showleftpage: false,
      };
    case actions.LEFT_STORY_MOVE_ON:
      return {
        ...state,
        storydialog: true,
        // activitydialog: false,
        // partydialog: false,
        // minedialog: false,
        // connectdialog: false,
        leftdialoglist: state.titles.story,
      };
    case actions.LEFT_ACTIVITY_MOVE_ON:
      return {
        ...state,
        activitydialog: true,
        // storydialog: false,
        // partydialog: false,
        // minedialog: false,
        // connectdialog: false,
        leftdialoglist: state.titles.activity,
      };
    case actions.LEFT_PARTY_MOVE_ON:
      return {
        ...state,
        partydialog: true,
        // storydialog: false,
        // activitydialog: false,
        // minedialog: false,
        // connectdialog: false,
        leftdialoglist: state.titles.party,
      };
    case actions.LEFT_MINE_MOVE_ON:
      return {
        ...state,
        minedialog: true,
        // storydialog: false,
        // activitydialog: false,
        // partydialog: false,
        // connectdialog: false,
        leftdialoglist: state.titles.mine,
      };
    case actions.LEFT_CONNECT_MOVE_ON:
      return {
        ...state,
        connectdialog: true,
        // storydialog: false,
        // activitydialog: false,
        // partydialog: false,
        // minedialog: false,
        leftdialoglist: state.titles.connect,
      };
    case actions.HIDE_LEFT_APPEAR_BOX:
      return {
        ...state,
        connectdialog: false,
        storydialog: false,
        activitydialog: false,
        partydialog: false,
        minedialog: false,
        leftdialoglist: [],
      };
    case actions.LEFT_STORY_MOVE_OUT:
      return {
        ...state,
        storydialog: false,
      };
    case actions.LEFT_PARTY_MOVE_OUT:
      return {
        ...state,
        partydialog: false,
      };
    case actions.LEFT_ACTIVITY_MOVE_OUT:
      return {
        ...state,
        activitydialog: false,
      };
    case actions.LEFT_CONNECT_MOVE_OUT:
      return {
        ...state,
        connectdialog: false,
      };
    case actions.LEFT_MINE_MOVE_OUT:
      return {
        ...state,
        minedialog: false,
      };
    case actions.GET_PAGE_REQUEST_SUCC: {
      const temp = { story: [], activity: [], party: [], mine: [], connect: [] };
      action.result.forEach((d) => {
        switch (d.platname) {
          case 'story': {
            temp.story.push({ ...d, ...JSON.parse(d.showtext) });
            break;
          }
          case 'activity': {
            temp.activity.push({ ...d, ...JSON.parse(d.showtext) });
            break;
          }
          case 'party': {
            temp.party.push({ ...d, ...JSON.parse(d.showtext) });
            break;
          }
          case 'mine': {
            temp.mine.push({ ...d, ...JSON.parse(d.showtext) });
            break;
          }
          default:
        }
      });
      return {
        ...state,
        titles: temp,
      };
    }
    // case actions.GET_PAGE_REQUEST_FAIL:
    //   return {
    //
    //   };
    default:
      return state;
  }
}
