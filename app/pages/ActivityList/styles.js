import { StyleSheet } from 'react-native';
import { windowW, windowH } from '../constants';

export default StyleSheet.create({
  wrap: {
    padding: 0,
    flex: 1
  },
  lists: {
    padding: 9,
    backgroundColor: '#f3f3f3'
  },
  listItem: {
    marginBottom: 9,
  },
  listItemImg: {
    width: windowW -20,
    height: 130,
    borderRadius: 4,
    borderColor: '#ebebeb',
    borderWidth: 1
  }
});