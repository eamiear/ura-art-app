import {StyleSheet,Platform} from 'react-native';
import GLOBAL_PARAMS from '../utils/global_params';

export default StyleSheet.create({
  ColorListView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ColorListItemView: {
    position: 'relative',
    // backgroundColor: '#FFCCCC',
    padding: 5,
    margin: 1,
    width: GLOBAL_PARAMS._winWidth*0.24,
    height: GLOBAL_PARAMS._winWidth*0.24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColorListItemViewActive: {
    // backgroundColor: '#FF66CC'
    backgroundColor: 'red'
  },
  ColorListItemImageView: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
  },
  ColorListItemTextView: {
    fontSize: 10,
    position: 'absolute',
    bottom: 2,
    width: GLOBAL_PARAMS._winWidth*0.24,
    padding: 2
  }
})