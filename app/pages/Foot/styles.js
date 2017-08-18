import { StyleSheet } from 'react-native';
import { windowW, windowH } from '../constants';

export default StyleSheet.create({
  wrap: {
    position: 'absolute',
    bottom: 0,
    width: windowW,
    height: 74,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  loc: {
    paddingTop: 5,
    flex: 1
  },
  scan: {
  },
  scanIcon: {
    width: 180,
    height: 58,
    resizeMode: 'contain'
  },
  service: {
    paddingTop: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    width: 48,
    height: 48,
    resizeMode: 'contain'
  }
});