import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home from '../Home/index';
import ScanQR from '../ScanQR/index';
import WebView from '../WebView/index';
import ActivityList from '../ActivityList/index'; // 活动列表

export const AppNavigator = StackNavigator({
  Home: { screen: Home },
  ScanQR: { screen: ScanQR },
  WebView: { screen: WebView },
  ActivityList: { screen: ActivityList },
});

const AppWithNavigationState = ({ dispatch, nav }) => {
  return (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  )
};

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(AppWithNavigationState);
