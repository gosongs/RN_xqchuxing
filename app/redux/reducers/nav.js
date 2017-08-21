import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../pages/App/index';

const defaultAction = AppNavigator.router.getActionForPathAndParams('Home');
const defaultState = AppNavigator.router.getStateForAction(defaultAction);

const combine = (routeName, state) => {
  return AppNavigator.router.getStateForAction(
    NavigationActions.navigate({ routeName }),
    state
  );
};

export default nav = (state = defaultState, action) => {
  switch (action.type) {
    case 'Home' || 'ScanQR' || 'WebView' || 'ActivityList':
      return combine(action.type, state);
    case 'Back':
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
};