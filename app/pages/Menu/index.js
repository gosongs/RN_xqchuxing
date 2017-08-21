import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { icons } from '../constants';
import defaultAvatar from '../../assets/icon_path_heard.png';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userInfo } = this.props;
    const userName = userInfo ? userInfo.userName : ""; // 用户名
    const couponNum = userInfo ? userInfo.couponNum : 0; // 优惠券 数目
    const account = userInfo ? userInfo.account : 0; // 账户余额
    const isBond = userInfo ? userInfo.isBond : "N"; // 是否认证
    const headImageUrl = userInfo ? userInfo.headImageUrl : ""; // 头像地址

    const avatarUrl = headImageUrl ? { uri: headImageUrl } : defaultAvatar;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarBg}
            source={icons.avatarBg}
          />
          <Image
            style={styles.avatar}
            source={avatarUrl}
          />

          <View style={styles.name}>
            <Text style={styles.nameTxt}>{userName}</Text>
          </View>

          <View style={styles.level}>
            <Text style={styles.levelTxt}>{isBond === 'Y' ? '已认证' : '未认证'}</Text>
          </View>
        </View>

        <View style={styles.lists}>
          <View style={styles.listItem}>
            <Image style={styles.icon} source={icons.accountIcon} />
            <Text style={styles.listItemTxt}>账户</Text>
            <Text style={styles.listItemVal}>￥112.00</Text>
          </View>

          <View style={styles.listItem}>
            <Image style={styles.icon} source={icons.travelIcon} />
            <Text style={styles.listItemTxt}>行程</Text>
          </View>

          <View style={styles.listItem}>
            <Image style={styles.icon} source={icons.couponIcon} />
            <Text style={styles.listItemTxt}>优惠券</Text>
            <Text style={styles.listItemVal}>10张</Text>
          </View>

          <View style={styles.listItem}>
            <Image style={styles.icon} source={icons.giftIcon} />
            <TouchableOpacity onPress={() => { navigate('ActivityList') }}>
              <Text style={styles.listItemTxt}>活动</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listItem}>
            <Image style={styles.icon} source={icons.msgIcon} />
            <Text style={styles.listItemTxt}>消息</Text>
          </View>

          <View style={styles.listItem}>
            <Image style={styles.icon} source={icons.serviceIcon} />
            <Text style={styles.listItemTxt}>客服中心</Text>
          </View>

          <View style={styles.listItem}>
            <Image style={styles.icon} source={icons.inviteIcon} />
            <Text style={styles.listItemTxt}>邀请</Text>
          </View>

          <View style={styles.listItem}>
            <Image style={styles.icon} source={icons.setIcon} />
            <Text style={styles.listItemTxt}>设置</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};

export default Menu;

// export default function Menu({ onItemSelected }) {

// }