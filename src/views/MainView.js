import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import {Container, Content} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import SignView from './SignView'

//utils
import GLOBAL_PARAMS from "../utils/global_params";
import MainViewStyles from '../styles/mainview.style';

import {
   StackNavigator,
   DrawerNavigator,
   NavigationActions
} from 'react-navigation';

const drawerView = DrawerNavigator({
  SignViewDrawer: {
    screen: SignView
  }
}, {
    drawerWidth: GLOBAL_PARAMS._winWidth * 0.75,
    drawerPosition: 'left',
    contentComponent: props => {
      return (
        <Container>
          <View>
            <LinearGradient colors={['#FF7F0B','#FF1A1A']} start={{x:0.0, y:0.0}} end={{x:1.0,y: 0.0}} style={MainViewStyles.drawerTopContainer}>
              <Image source={require('../assets/images/background/sign.png')} style={MainViewStyles.drawerTopImage}/>
            </LinearGradient>
          </View>
          <Content style={MainViewStyles.drawerContent}>
            <View style={MainViewStyles.drawerInnerContent}>
              <TouchableOpacity style={MainViewStyles.drawerItemBtn}>
                <Text
                  allowFontScaling={false}
                  style={MainViewStyles.drawerItemText}>
                  一键签名
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={MainViewStyles.drawerItemBtn}>
                <Text
                  allowFontScaling={false}
                  style={MainViewStyles.drawerItemText}>
                  一笔签名
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={MainViewStyles.drawerItemBtn}>
                <Text
                  allowFontScaling={false}
                  style={MainViewStyles.drawerItemText}>
                  图集
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={MainViewStyles.drawerItemBtn}>
                <Text
                  allowFontScaling={false}
                  style={MainViewStyles.drawerItemText}>
                  用户反馈
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={MainViewStyles.drawerItemBtn}>
                <Text
                  allowFontScaling={false}
                  style={MainViewStyles.drawerItemText}>
                  会员信息
                </Text>
              </TouchableOpacity>
            </View>
          </Content>
        </Container>
      )
    }
})

const MainView = StackNavigator({
  Home: {
    screen: drawerView
  }
}, {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: '#fff'
  },
  transitionConfig: () => ({
    containerStyle: {
      backgroundColor: '#fff'
    }
  })
})

export default MainView