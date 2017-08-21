import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { getActivityList, setProgress } from '../../redux/actions/bike';
import ScreenHead from '../common/ScreenHead/index';
import styles from './styles';

const propTypes = {};

const defaultProps = {};

class ActivityList extends Component {
  static navigationOptions = {
    header: null // hide nagivation header
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getActivityList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activityList) {
      this.props.setProgress(1);
    }
  }

  render() {
    const { progress, navigation, setProgress, activityList } = this.props;
    const { navigate } = navigation;
    let lists;
    if (activityList) {
      lists = activityList.map((item, i) => {
        return (
          <View style={styles.listItem} key={i}>
            <TouchableOpacity onPress={() => navigate('WebView', { title: item.messageName, url: item.linkUrl })}>
              <Image style={styles.listItemImg} source={{ uri: item.materialUrl }} />
            </TouchableOpacity>
          </View>
        )
      })
    }

    return (
      <View style={styles.wrap}>
        <ScreenHead
          title="活动"
          navigation={navigation}
          progress={progress}
          setProgress={setProgress} />

        <ScrollView style={styles.lists}>
          {lists}
        </ScrollView>
      </View>
    );
  }
}

ActivityList.propTypes = propTypes;

ActivityList.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    ...state.bike
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getActivityList: params => {
      return dispatch(getActivityList(params));
    },
    setProgress: params => {
      return dispatch(setProgress(params));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
