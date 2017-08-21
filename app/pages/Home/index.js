import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';
import styles from './styles';
import { toggleMenu, getUserInfo, setProgress } from './../../redux/actions/bike';

import Head from '../Head/index';
import Foot from '../Foot/index';
import Menu from '../Menu/index';
import { windowW } from '../constants';

const propTypes = {};

const defaultProps = {};

class Home extends Component {
  static navigationOptions = {
    header: null // hide nagivation header
  };

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      selectedItem: 'About',
    };
  }

  toggle() {
    this.props.toggleMenu();
  }

  updateMenuState(isOpen) {
    this.props.toggleMenu(isOpen);
  }

  onMenuItemSelected = item => {
    this.props.toggleMenu(false);
    this.setState({
      selectedItem: item,
    });
  }

  render() {
    const { isMenuOpen } = this.props;
    const menu = <Menu {...this.props} onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu
        bounceBackOnOverdraw={false}
        toleranceX={10}
        openMenuOffset={windowW * 0.75}
        menu={menu}
        isOpen={isMenuOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.wrap}>
          <Head />
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>

          <Foot {...this.props} />
        </View>
      </SideMenu>
    );
  }
}

Home.propTypes = propTypes;

Home.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    ...state.bike
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: params => {
      dispatch(toggleMenu(params));
    },
    getUserInfo: params => {
      return dispatch(getUserInfo(params));
    },
    setProgress: params => {
      return dispatch(setProgress(params));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
