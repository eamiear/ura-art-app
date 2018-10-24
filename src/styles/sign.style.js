import { StyleSheet, Platform } from 'react-native';
import GLOBAL_PARAMS from '../utils/global_params'
import CommonStyles from '../styles/common.style';
import { Left } from 'native-base';

const diffPaltform = {
  content_height: Platform.select({
    // ios: GLOBAL_PARAMS._winHeight * 0.8,
    // android: GLOBAL_PARAMS._winHeight * 0.75
    ios: GLOBAL_PARAMS._winHeight * 0.92,
    android: GLOBAL_PARAMS._winHeight * 0.87
  })
}
const RectHeight = (diffPaltform.content_height - GLOBAL_PARAMS._winHeight * .08 /* header */) * (1 - .06 * 3)/* button */ * 0.5

export default StyleSheet.create({
  HeaderView: {
    height: GLOBAL_PARAMS._winHeight * .08
  },
  ContentView: {
    height: diffPaltform.content_height,
    paddingTop: 2,
    paddingLeft: 3,
    paddingRight: 3
  },
  FormView: {
  },
  FormItemView: {
    marginLeft: 0,
    marginTop: 2
  },
  FormItemViewInput: {
    height: GLOBAL_PARAMS._winHeight * .06,
    width: GLOBAL_PARAMS._winWidth * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    fontSize: 13,
    borderColor: '#d9534f',
  },
  FormItemViewBtn: {
    height: GLOBAL_PARAMS._winHeight * .06,
    width: GLOBAL_PARAMS._winWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#FA9285',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    elevation: 3
  },
  FormItemSignPropBtnView: {
    height: GLOBAL_PARAMS._winHeight * .06,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#FA9285',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    elevation: 3
  },
  GalleryView: {
    position: 'relative',
    marginTop: 5
  },
  GalleryItemView: {
    width: GLOBAL_PARAMS._winWidth * 0.5,
    height: RectHeight,
    backgroundColor: '#635DB7',
    borderWidth: 1,
    margin: 1
  },
  GalleryItemViewItem: {
    // width: GLOBAL_PARAMS._winWidth * 0.5,
    height: RectHeight,
  },
  GalleryItemViewImageWrapper: {
    // width: '100%',
    height: '100%',
    maxHeight: '100%',
    padding: 2,
    alignItems: 'center',
  },
  GalleryItemViewImage: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -40,
    marginTop: -30,
    width: 80,
    height: 60,
  },
  GalleryItemViewSignView: {
    maxWidth: '100%',
    // width: '100%',
    width: 80,
    height: 60,
  },
  GalleryQRCodeRectView: {
    backgroundColor: '#fff',
    position: 'absolute',
    left:  '50%',
    top: '50%',
    width: GLOBAL_PARAMS._winWidth * 0.5 / 2,
    height: RectHeight / 2,
    marginLeft: -GLOBAL_PARAMS._winWidth * 0.5 / 2 / 2,
    marginTop: -RectHeight / 2 / 2,
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 5,
  },
  ButtonWrapper: {
    marginTop: 5
  },
  ButtonWrapperSplitLine: {
    marginRight: 2
  },
  SignActionBtnView: {
    height: GLOBAL_PARAMS._winHeight * .06,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#FA9285',
    shadowOpacity: 0.8,
    elevation: 3
  }
})