import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import locIcon from '../../assets/icon_now_nor.png';
import scanIcon from '../../assets/icon_use_normal.png';
import serviceIcon from '../../assets/icon_service_nor.png';

const propTypes = {
  navigation: PropTypes.object.isRequired,
};

const defaultProps = {};

class Foot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrap}>
        <View style={styles.loc}>
          <Image style={styles.icon} source={locIcon} />
        </View>

        <View style={styles.scan}>
          <TouchableOpacity onPress={() => navigate('ScanQR')}>
            <Image style={styles.scanIcon} source={scanIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.service}>
          <TouchableOpacity onPress={() => {
            navigate('WebView', { title: '夺宝奇兵', url: 'https://www.xqchuxing.com/activity/xqchuxing/wechat/riderShocker/index.html?parameter=1&tel=15800651893&=&navTitle=%E5%A4%BA%E5%AE%9D%E9%AA%91%E5%85%B5&messageId=36&random=0.1804025988058272' });
          }}>
            <Image style={styles.icon} source={serviceIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Foot.propTypes = propTypes;

Foot.defaultProps = defaultProps;

export default Foot;
