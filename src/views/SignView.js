import React, { PureComponent } from 'react';
import {View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import {
  Container,
  Button,
  Icon,
  Header,
  Left,
  Body,
  Right,
  Title,
  Form,
  Item,
  Text,
  Input,
  Content,
  Grid,
  Col,
  Row
} from 'native-base';
import { captureRef, captureScreen } from "react-native-view-shot";
import GLOBAL_PARAMS from '../utils/global_params'
import ToastUtils from '../utils/ToastUtils'
import api from '../api/art';
import SignStyle from '../styles/sign.style'

export default class SignView extends PureComponent {
  constructor() {
    super()
    this.refs = {
      canvas: {}
    }
    this.state = {
      uri: '',
      isQrcodeVisible: true,
      text: '',
      style: '',
      color: '',
      decorator: ''
    }
  }
  componentWillMount () {

  }

  componentDidMount () {
    // const canvas = new fabric.Canvas('c', {
    //   width: this.refs.canvas.clientWidth,
    //   height: this.refs.canvas.clientHeight
    // });

    // this.fabric = canvas;
  }
  
  componentWillUnmount () {

  }

  _renderHeader () {
    return (
      <Header style={SignStyle.HeaderView}>
        <Left>
          <Button transparent>
            <Icon name='beer' />
          </Button>
        </Left>
        <Body>
          <Title>签名</Title>
        </Body>
        <Right />
      </Header>
    )
  }

  componentDidUpdate() {
    const {
      images = []
    } = this.props;
    const {
      fabric
    } = this;

    // do some stuff as new props or state have been received aka component did update
    images.map((image, index) => {
      fabric.Image.fromURL(image.url, {
        top: 0,
        left: index * 100 // place a new image left to right, every 100px
      });
    });
  }

  _renderBottomView () {
    
  }

  _getSignName (name) {
    this.setState({
      text:name
    }) 
  }

  _getSignNameImage () {
    let {text, style, color, decorator} = this.state
    api.getSignImage(text, style, color, decorator).then(res => {
      console.log(res)
    })
  }

  _renderContentView () {
    return (
      <Content style={SignStyle.ContentView}>
        <Form>
          <Item inlineLabel style={{marginLeft: 0}}>
            <Button danger style={SignStyle.FormItemViewBtn}><Text> 背景 </Text></Button>
            {/* <Input style={SignStyle.FormItemViewInput} /> */}
            <Input 
              style={SignStyle.FormItemViewInput}
              multiline={false}
              autoFocus={false}
              onChangeText={name => this._getSignName(name)}
              placeholder="请输入签名"
              clearButtonMode="while-editing"
              placeholderTextColor="#999999"
              returnKeyType="done"/>
            <Button danger style={SignStyle.FormItemViewBtn} onPress={() => this._getSignNameImage()}><Text> 签名 </Text></Button>
          </Item>
        </Form>
        {/* <View>
          <Button><Text>类型</Text></Button>
        </View> */}
        <Grid style={SignStyle.GalleryView}>
          <Row>
            <Col style={SignStyle.GalleryItemView}>
              <View ref='p' collapsable={false} style={SignStyle.GalleryItemViewItem}>
                <ImageBackground 
                  style={SignStyle.GalleryItemViewImageWrapper}
                  source={require('../assets/images/background/summer.png')}>
                  <View style={SignStyle.GalleryItemViewImage}>
                    <Image 
                      style={SignStyle.GalleryItemViewSignView}
                      source={require('../assets/images/background/sign.png')}
                      resizeMode='contain'/>
                  </View>
                </ImageBackground>
              </View>
            </Col>
            <Col style={SignStyle.GalleryItemView}>
              <View ref='o' collapsable={false} style={SignStyle.GalleryItemViewItem}>
                <ImageBackground 
                  style={SignStyle.GalleryItemViewImageWrapper}
                  source={require('../assets/images/background/summer.png')}>
                  <View style={SignStyle.GalleryItemViewImage}>
                    <Image 
                      style={SignStyle.GalleryItemViewSignView}
                      source={require('../assets/images/background/sign.png')}
                      resizeMode='contain'/>
                  </View>
                </ImageBackground>
              </View>
            </Col>
          </Row>
          <Row>
            <Col style={SignStyle.GalleryItemView}>
              <View ref='o' collapsable={false} style={SignStyle.GalleryItemViewItem}>
                <ImageBackground 
                  style={SignStyle.GalleryItemViewImageWrapper}
                  source={require('../assets/images/background/summer.png')}>
                  <View style={SignStyle.GalleryItemViewImage}>
                    <Image 
                      style={SignStyle.GalleryItemViewSignView}
                      source={require('../assets/images/background/sign.png')}
                      resizeMode='contain'/>
                  </View>
                </ImageBackground>
              </View>
            </Col>
            <Col style={SignStyle.GalleryItemView}>
              <View ref='o' collapsable={false} style={SignStyle.GalleryItemViewItem}>
                <ImageBackground 
                  resizeMode='stretch'
                  style={SignStyle.GalleryItemViewImageWrapper}
                  source={require('../assets/images/background/summer.png')}>
                  <View style={SignStyle.GalleryItemViewImage}>
                    <Image 
                      style={SignStyle.GalleryItemViewSignView}
                      source={require('../assets/images/background/sign.png')}
                      resizeMode='contain'/>
                  </View>
                </ImageBackground>
              </View>
            </Col>
          </Row>
          {
            this.state.isQrcodeVisible && <View style={[SignStyle.GalleryQRCodeRectView]}></View>
          }
        </Grid>
        <Row style={SignStyle.ButtonWrapper}>
          <Col style={SignStyle.ButtonWrapperSplitLine}>
            <Button block danger onPress={()=>this.takeToImage()}>
              <Text>保存签名.</Text>
            </Button>
          </Col>
          <Col>
            <Button block danger onPress={()=>this.qrcode()}>
              <Text>展示/隐藏二维码</Text>
            </Button>
          </Col>
        </Row>
      </Content>
    )
  }
  render () {
    return (
      <Container>
        {this._renderHeader()}
        {this._renderContentView()}
        {this._renderBottomView()}
      </Container>
    )
  }

  takeToImage() {
    // ReactNative.takeSnapshot(this.refs.picture, {format: 'png', quality: 1}).then((uri) =>{
    //     this.setState({uri:uri})
    //     console.log('uri', uri)
    //   }).catch(
    //   (error) => alert(error)
    // );
    // console.log(captureRef)
    captureRef(this.refs['p'], {
      format: "jpg",
      quality: 0.8,
      result: "base64"
    })
    .then(
      uri => {
        console.log("Image saved to", uri)
      },
      error => {
        console.error("Oops, snapshot failed", error)
      }
    );
    // captureScreen({
    //   format: "jpg",
    //   quality: 0.8,
    //   result: "base64"
    // })
    // .then(
    //   uri => console.log("Image saved to", uri),
    //   error => console.error("Oops, snapshot failed", error)
    // );
  }

  qrcode () {
    this.setState({
      isQrcodeVisible: !this.state.isQrcodeVisible
    })
  }

  _getBackgroundImage () {
    return '../assets/images/background/summer.png'
  }
}