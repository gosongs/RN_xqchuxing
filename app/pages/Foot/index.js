import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import locIcon from '../../assets/icon_now_nor.png';
import scanIcon from '../../assets/icon_use_normal.png';
import serviceIcon from '../../assets/icon_service_nor.png';

const propTypes = {};

const defaultProps = {};

class Foot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.loc}>
          <Image style={styles.icon} source={locIcon} />
        </View>

        <View style={styles.scan}>
          <Image style={styles.scanIcon} source={scanIcon} />
        </View>

        <View style={styles.service}>
          <Image style={styles.icon} source={serviceIcon} />
        </View>
      </View>
    );
  }
}

Foot.propTypes = propTypes;

Foot.defaultProps = defaultProps;

const mapStateToProps = state => {
  const { key } = state;
  return { key };
}

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Foot);
