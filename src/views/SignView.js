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
import ImagePicker from "react-native-image-picker";
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
      decorator: '',
      signProp1: {
        uri: '',
        style: '901',
        color: '#cc2323'
      },
      signProp2: {
        uri: '',
        style: '',
        color: ''
      },
      signProp3: {
        uri: '',
        style: '',
        color: ''
      },
      signProp4: {
        uri: '',
        style: '',
        color: ''
      }
    }
  }
  componentWillMount () {
  }

  componentDidUpdate() {
    
  }

  componentDidMount () {
    if (this.props.navigation.state.params) {
      
    }
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
          <Title>一笔签名</Title>
        </Body>
        <Right />
      </Header>
    )
  }

  _renderBottomView () {
    
  }

  _getSignName (name) {
    this.setState({
      text:name
    }) 
  }

  _getSignNameImage () {
    let {text, signProp1} = this.state
    api.getSignImage(text, signProp1.style, signProp1.color, signProp1.decorator).then(res => {
      this.setState({
        uri: 'data:image/jpeg;base64,' + res.data.sign,
        signProp1: {
          uri: 'data:image/jpeg;base64,' + res.data.sign
        }
      })
      console.log('xxx ', this.state.signProp1)
    })
  }
  selectPhotoTapped () {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    // Launch Camera:
    // ImagePicker.launchCamera(options, (response) => {
    //   // Same code as in above section!
    //   console.log(response)
    // });

    // Open Image Library:
    // ImagePicker.launchImageLibrary(options, (response) => {
    //   // Same code as in above section!
    //   console.log(response)
    // });
    
    ImagePicker.showImagePicker(options, async (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        // console.log('User cancelled photo picker');
      }
      else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log('selected photo ', response);
        
        // this.setState({
        //   photoData: response
        // });
      }
    });
  }

  _renderContentView () {
    return (
      <Content style={SignStyle.ContentView}>
        <Form>
          <Item inlineLabel style={SignStyle.FormItemView}>
            <Button danger style={[SignStyle.FormItemViewBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}  onPress={() => {
                this.props.navigation.navigate('Background')
              }}><Text> 背景 </Text></Button>
            <Input 
              style={SignStyle.FormItemViewInput}
              multiline={false}
              autoFocus={false}
              onChangeText={name => this._getSignName(name)}
              placeholder="请输入姓名..."
              clearButtonMode="while-editing"
              placeholderTextColor="#999999"
              returnKeyType="done"/>
            <Button danger style={[SignStyle.FormItemViewBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]} onPress={() => this._getSignNameImage()}><Text> 设计 </Text></Button>
          </Item>
          <Item inlineLabel style={SignStyle.FormItemView}>
            <Row>
              <Col style={SignStyle.ButtonWrapperSplitLine}>
                <Button block danger style={SignStyle.FormItemSignPropBtnView} onPress={() => {
                  this.props.navigation.navigate('Style')
                }}>
                  <Text>风格</Text>
                </Button>
              </Col>
              <Col>
                <Button block danger style={SignStyle.FormItemSignPropBtnView} onPress={() => {
                  this.props.navigation.navigate('Colors')
                }}>
                  <Text>颜色</Text>
                </Button>
              </Col>
            </Row>
          </Item>
        </Form>
        
        <Grid style={SignStyle.GalleryView}>
          <Row>
            <Col style={SignStyle.GalleryItemView}>
              <View ref='p' collapsable={false} style={SignStyle.GalleryItemViewItem}>
                <ImageBackground 
                  style={SignStyle.GalleryItemViewImageWrapper}
                  source={require('../assets/images/background/summer.png')}>
                </ImageBackground>
                {
                  !this.state.uri ? null : 
                  <View style={SignStyle.GalleryItemViewImage}>
                    <Image 
                      style={[SignStyle.GalleryItemViewSignView]}
                      source={{uri: this.state.uri}}
                      resizeMode='contain'/>
                  </View>
                }
              </View>
            </Col>
            <Col style={SignStyle.GalleryItemView}>
              <View ref='o' collapsable={false} style={SignStyle.GalleryItemViewItem}>
                <ImageBackground 
                  style={SignStyle.GalleryItemViewImageWrapper}
                  source={require('../assets/images/background/summer.png')}>
                </ImageBackground>
                <View style={SignStyle.GalleryItemViewImage}>
                  <Image 
                    style={SignStyle.GalleryItemViewSignView}
                    source={require('../assets/images/background/sign.png')}
                    resizeMode='contain'/>
                </View>
              </View>
            </Col>
          </Row>
          <Row>
            <Col style={SignStyle.GalleryItemView}>
              <View ref='o' collapsable={false} style={SignStyle.GalleryItemViewItem}>
                <ImageBackground 
                  style={SignStyle.GalleryItemViewImageWrapper}
                  source={require('../assets/images/background/summer.png')}>
                </ImageBackground>
                <View style={SignStyle.GalleryItemViewImage}>
                  <Image 
                    style={SignStyle.GalleryItemViewSignView}
                    source={require('../assets/images/background/sign.png')}
                    resizeMode='contain'/>
                </View>
              </View>
            </Col>
            <Col style={SignStyle.GalleryItemView}>
              <View ref='o' collapsable={false} style={SignStyle.GalleryItemViewItem}>
                <ImageBackground 
                  resizeMode='stretch'
                  style={SignStyle.GalleryItemViewImageWrapper}
                  source={require('../assets/images/background/summer.png')}>
                </ImageBackground>
                <View style={SignStyle.GalleryItemViewImage}>
                  <Image 
                    style={SignStyle.GalleryItemViewSignView}
                    source={require('../assets/images/background/sign.png')}
                    resizeMode='contain'/>
                </View>
              </View>
            </Col>
          </Row>
          {
            this.state.isQrcodeVisible && 
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={[SignStyle.GalleryQRCodeRectView]}>
              <View ></View>
            </TouchableOpacity>
          }
        </Grid>
        <Row style={SignStyle.ButtonWrapper}>
          <Col style={SignStyle.ButtonWrapperSplitLine}>
            <Button block danger style={SignStyle.SignActionBtnView} onPress={()=>this.takeToImage()}>
              <Text>保存到相册</Text>
            </Button>
          </Col>
          <Col>
            <Button block danger style={SignStyle.SignActionBtnView} onPress={()=>this.qrcode()}>
              <Text>隐藏二维码</Text>
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