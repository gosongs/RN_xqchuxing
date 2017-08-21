import { StyleSheet } from 'react-native';
import { windowW, windowH } from '../../constants';

export default StyleSheet.create({
  wrap: {
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#afaca6',
    backgroundColor: '#f7f7f7',
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 14,
    paddingLeft: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'relative',
  },
  back: {
    width: 60
  },
  backIcon: {
    width: 8,
    height: 14,
    resizeMode: 'contain'
  },
  title: {
    width: 150
  },
  titleTxt: {
    color: '#373a4c',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  },
  handle: {
    width: 60
  },
  progressBar: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    width: windowW,
    height: 2
  }
});