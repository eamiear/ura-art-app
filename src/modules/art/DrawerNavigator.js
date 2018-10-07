// import React, {Component} from 'react';
import {DrawerNavigator} from 'react-navigation';
import ForumDetailStack from './ForumDetailScreen'
import TopicListStack from './TopicListScreen'
import SideMenu from './ForumListScreen'

export default DrawerNavigator({
  ForumDetail: {
    screen: ForumDetailStack
  },
  TopicList: {
    screen: TopicListStack
  }
}, {
  initialRouteName: 'TopicList',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  contentComponent: SideMenu,
  drawerWidth: 300
})