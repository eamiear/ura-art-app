import React, {PureComponent} from 'react'
import {View, Text, Image, TouchableOpacity, SectionList,StyleSheet,RefreshControl} from 'react-native'
import {
  Container,
  ListItem,
  Card,
  CardItem,
  Body,
  Content,
  Grid,
  Row,
  Col
} from 'native-base';
import CommonHeader from "../components/CommonHeader";
import GLOBAL_PARAMS from '../utils/global_params'
import FontStyle from '../styles/styles.style'
import {stylesData, styleImage} from '../utils/Resource'

export default class StyleView extends PureComponent {
  state = {
    stylesData,
    styleImage,
    selectedStyleList: []
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentWillReceiveProps (prevProps) {
    console.log('ReceiveProps  ', prevProps)
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('nextProps ', nextProps)
    // this.state.selectedStatus.includes(this.state.styleData[item])
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('preProps  ', prevProps)
  }

  _selectedStyle (item, index) {
    if (item.selected) {
      this.state.selectedStyleList.splice(this.state.selectedStyleList.findIndex(style => style.text === item.text), 1)
    } else {
      this.state.selectedStyleList.push(item)
    }
    this.state.stylesData[index].selected = !item.selected
    this.setState({
      stylesData: this.state.stylesData
    })
    if (this.state.selectedStyleList.length >= 4) {
      this.props.navigation.replace("Home", {
        type: 'style',
        content: this.state.selectedStyleList
      })
    }
  }

  _renderStyleListView = () => {
    // TODO 选中状态
    return this.state.stylesData.map((item, index) => (
      <TouchableOpacity key={index} onPress={
          () => this._selectedStyle(item, index)
        }>
        <View 
          style={[FontStyle.StyleListItemView, {backgroundColor: item.selected === true ? '#000000' : '#FFCCCC'}]}
          >
          <Image 
            resizeMode='contain'
            style={FontStyle.StyleListItemImageView} 
            source={this.state.styleImage[item.text]}/>
          <Text style={FontStyle.StyleListItemTextView}>{`${index}. ${item.label}`}</Text>
        </View>
      </TouchableOpacity>
    ))
  }
  render () {
    return (
      <Container style={{position: 'relative'}}>
        <CommonHeader title="选择风格" canBack {...this.props}></CommonHeader>
        <Content>
          <View style={FontStyle.StyleListView}>
            {this._renderStyleListView()}
          </View>
        </Content>
      </Container>
    )
  }
}