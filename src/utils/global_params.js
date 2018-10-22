import {Dimensions, Platform} from 'react-native';

const GLOBAL_PARAMS = {
  _winWidth: Dimensions.get('window').width,
  _winHeight: Dimensions.get('window').height,
  httpStatus: {
    LOADING: 0,
    LOAD_SUCCESS: 1,
    LOAD_FAILED: 2,
    NO_MORE_DATA: 3,
    NO_DATA: 4
  },
  bottomDistance: Platform.select({ios: 65, android: 60})
}

module.exports = GLOBAL_PARAMS