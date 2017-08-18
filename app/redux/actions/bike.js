import * as types from '../constants/actionTypes';

const USER_DATA = "lat=31.256355&lng=121.620809&mobile=15800651893&sessionKey=18A6D5BA3EE7E37F81C27E22EAF1B160&source=IOS&version=117";

const toggleMenuAction = (params) => {
  return {
    type: types.TOGGLE_MENU,
    isMenuOpen: params
  }
};

export const toggleMenu = params => dispatch => {
  dispatch(toggleMenuAction(params));
};

const getUserInfoAction = userInfo => {
  return {
    type: types.GET_USER_INFO,
    userInfo
  }
};

export const getUserInfo = params => dispatch => {
  return fetch('https://www.xqchuxing.com/xqtravel/api/user/v4/center', {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: USER_DATA
  })
    .then(response => {
      return response.json();
    })
    .then(res => {
      if (res.success) {
        dispatch(getUserInfoAction(res.result))
      } else {
        // 错误处理
      }
    })
    .catch(err => {
      console.log(err);
    })
};