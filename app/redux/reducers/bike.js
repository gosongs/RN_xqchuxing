import * as types from '../constants/actionTypes';
const initialState = {
  isMenuOpen: false,
  userInfo: null
};

export default bike = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return { ...state, isMenuOpen: action.isMenuOpen };
    case types.GET_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    default:
      return state;
  }
}