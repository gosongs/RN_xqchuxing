import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, View, Text, WebView } from 'react-native';
import ScreenHead from '../common/ScreenHead/index';
import styles from './styles';
import { setProgress } from '../../redux/actions/bike';

const propTypes = {};

const defaultProps = {};

class ServiceCenter extends Component {
  static navigationOptions = {
    header: null // hide nagivation header
  };

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const { progress, navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    
    return (
      <ScrollView>
        <ScreenHead
          title={params.title}
          navigation={this.props.navigation}
          progress={progress}
          setProgress={this.props.setProgress} />

        <WebView
          style={styles.webView}
          source={{ uri: params.url }}
          onError={() => console.log('onError')}
          onLoadEnd={() => this.props.setProgress(1)} />
      </ScrollView>
    );
  }
}

ServiceCenter.propTypes = propTypes;

ServiceCenter.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    ...state.bike
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setProgress: params => {
      return dispatch(setProgress(params));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCenter);
