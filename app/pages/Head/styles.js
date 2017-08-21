import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrap: {
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    backgroundColor: '#f7f7f7',
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 14,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  menu: {
    width: 60
  },
  menuBtn: {
    width: 20
  },
  logo: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logoIcon: {
    width: 97,
    height: 16,
    resizeMode: 'contain'
  },
  tool: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'flex-end'
  }
});