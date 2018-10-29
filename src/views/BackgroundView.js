import React, {PureComponent} from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {
  Container,
  Content,
} from 'native-base';
import CommonHeader from "../components/CommonHeader";
import BackgroundStyle from '../styles/background.style'
import {backgroundImageList} from '../utils/Resource'

export default class BackgroundView extends PureComponent {
  state = {
    backgroundImageList,
    selectedList: []
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentWillReceiveProps () {

  }
  _selectedBackground (item, index) {
    this.props.navigation.replace("Home", {
      type: 'background',
      index: index,
      content: item
    })
  }
  _renderBackgroundImageListView () {
    return this.state.backgroundImageList.map((item, index) => (
      <TouchableOpacity key={index} onPress={
          () => this._selectedBackground(item, index)
        }>
        <View 
          style={[BackgroundStyle.BackgroundListItemView]}>
          <Image 
            resizeMode='contain'
            style={BackgroundStyle.BackgroundListItemImageView} 
            source={item}/>
        </View>
      </TouchableOpacity>
    ))
  }

  render () {
    return (
      <Container style={{position: 'relative'}}>
        <CommonHeader title="选择签名背景" canBack {...this.props}></CommonHeader>
        <Content>
          <View style={BackgroundStyle.BackgroundListView}>
            {this._renderBackgroundImageListView()}
          </View>
        </Content>
      </Container>
    )
  }
}