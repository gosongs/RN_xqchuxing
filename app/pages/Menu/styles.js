import { StyleSheet } from 'react-native';
import { windowW, windowH } from '../constants';

export default StyleSheet.create({
  menu: {
    flex: 1,
    width: 240,
    height: windowH,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    position: 'relative',
    height: 154,
  },
  avatarBg: {
    height: 154,
    width: 0.75 * windowW,
    resizeMode: 'contain'
  },
  avatar: {
    position: 'absolute',
    width: 56,
    height: 56,
    top: 48,
    left: 50,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 28
  },
  name: {
    position: 'absolute',
    left: 119,
    top: 55,
    backgroundColor: 'transparent'
  },
  nameTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  level: {
    position: 'absolute',
    left: 119,
    top: 80,
    backgroundColor: '#efbf34',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    borderRadius: 3
  },
  levelTxt: {
    color: '#fff',
    fontSize: 12
  },
  lists: {
    paddingTop: 15
  },
  listItem: {
    position: 'relative',
    height: 44,
    paddingLeft: 20,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    resizeMode: 'contain',
    marginRight: 12
  },
  listItemTxt: {
    color: '#7d7d7d',
    fontSize: 16
  },
  listItemVal: {
    lineHeight: 40,
    position: 'absolute',
    right: 15,
    top: 0,
    color: '#51cb73',
    fontSize: 16
  }
});