import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { icons, windowW } from '../../constants';
import styles from './styles';
import * as Progress from 'react-native-progress';

const propTypes = {
  title: React.PropTypes.string.isRequired,
  navigation: React.PropTypes.object.isRequired
};

const defaultProps = {};

class ScreenHead extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { navigation, progress } = this.props;
    return (
      <View style={styles.wrap}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => {
            this.props.setProgress(0);
            navigation.goBack(null);
          }}>
            <Image style={styles.backIcon} source={icons.backIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text style={styles.titleTxt}>{this.props.title}</Text>
        </View>

        <View style={styles.handle}></View>

        {progress === 1 ? undefined : (
          <View style={styles.progressBar}>
            <Progress.Bar
              progress={progress}
              width={windowW}
              height={2}
              borderRadius={0}
              color="#46c15f" />
          </View>
        )}
      </View>
    );
  }
}

ScreenHead.propTypes = propTypes;

ScreenHead.defaultProps = defaultProps;

export default ScreenHead;
