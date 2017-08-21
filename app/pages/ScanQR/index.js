import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const propTypes = {};

const defaultProps = {};

class ScanQR extends Component {
  static navigationOptions = {
    header: null // hide nagivation header
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>二维码扫描页</Text>
      </View>
    );
  }
}

ScanQR.propTypes = propTypes;

ScanQR.defaultProps = defaultProps;

export default ScanQR;
