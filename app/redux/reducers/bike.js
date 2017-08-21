import * as types from '../constants/actionTypes';
const initialState = {
  isMenuOpen: false,
  userInfo: null,
  progress: 0,
  activityList: null
};

export default bike = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return { ...state, isMenuOpen: action.isMenuOpen };
    case types.GET_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    case types.SET_PROGRESS:
      return { ...state, progress: action.progress };
    case types.GET_ACTIVITY_LIST:
      return { ...state, activityList: action.activityList };
    default:
      return state;
  }
}