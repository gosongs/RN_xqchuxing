import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { toggleMenu, getUserInfo } from './../../redux/actions/bike';

import menuIcon from '../../assets/icon_menu.png';
import logoIcon from '../../assets/main_head.png';
import giftIcon from '../../assets/icon_gift.png';
import searchIcon from '../../assets/icon_search.png';

const propTypes = {};

const defaultProps = {};

class Head extends Component {
  constructor(props) {
    super(props);
    this._toggleMenu = this._toggleMenu.bind(this);

    this.state = {};
  }

  _toggleMenu() {
    const { isMenuOpen } = this.props;
    this.props.toggleMenu(!isMenuOpen);

    // 展开目录时, 获取用户信息
    if (!isMenuOpen) {
      this.props.getUserInfo();
    }
  }

  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuBtn} onPress={this._toggleMenu}>
            <Image style={styles.icon} source={menuIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.logo}>
          <Image style={styles.logoIcon} source={logoIcon} />
        </View>

        <View style={styles.tool}>
          <Image style={[styles.icon, { marginRight: 15 }]} source={giftIcon} />
          <Image style={styles.icon} source={searchIcon} />
        </View>
      </View>
    );
  }
}

Head.propTypes = propTypes;

Head.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    ...state.bike
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: (params) => {
      dispatch(toggleMenu(params));
    },
    getUserInfo: params => {
      return dispatch(getUserInfo(params));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Head);
