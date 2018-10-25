import React, {PureComponent} from 'react'
import {View,Text,TouchableWithoutFeedback, SectionList,StyleSheet,RefreshControl} from 'react-native'
import {
  Container,
  Card,
  CardItem,
} from 'native-base';
import CommonHeader from "../components/CommonHeader";

export default class BackgroundView extends PureComponent {
  state = {

  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentWillReceiveProps () {

  }

  _renderBackgroundImageListView () {

  }

  render () {
    return (
      <Container style={{position: 'relative'}}>
        <CommonHeader title="选择签名背景" canBack {...this.props}></CommonHeader>
        <View>
          <Text> 背景 </Text>
        </View>
      </Container>
    )
  }
}