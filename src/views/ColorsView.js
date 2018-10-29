import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {
  Container,
  Content,
} from 'native-base';
import CommonHeader from "../components/CommonHeader";
import {colorsMapArray} from '../utils/Resource'
import ColorStyle from '../styles/color.style'

export default class ColorsView extends PureComponent {
  state = {
    colorsMapArray
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentWillReceiveProps () {

  }

  _selectedColor (item, index) {
    this.props.navigation.replace("Home", {
      type: 'color',
      index: index,
      content: item
    })
  }
  _renderColorListView () {
    return this.state.colorsMapArray.map((item, index) => (
      <TouchableOpacity key={index} onPress={
          () => this._selectedColor(item, index)
        }>
        <View style={[ColorStyle.ColorListItemView, {backgroundColor: item.text}]}>
          <Text style={ColorStyle.ColorListItemTextView}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    ))
  }

  render () {
    return (
      <Container style={{position: 'relative'}}>
        <CommonHeader title="选择颜色" canBack {...this.props}></CommonHeader>
        <Content>
          <View style={ColorStyle.ColorListView}>
            {this._renderColorListView()}
          </View>
        </Content>
      </Container>
    )
  }
}