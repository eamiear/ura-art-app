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

export default class StyleView extends PureComponent {
  state = {
    styleData: {
      "一笔艺术签名"  : "901",
      "一笔商务签"   : "905",
      "一笔签名体"  : "6",
      "连笔草书"  : "21",
      "连笔草书字"  : "22",
      "连笔艺术字"  : "396",
      "连笔手写字"  : "398",
      "行楷"  : "2",
      "手写字"  : "16",
      "疾风草书体"  : "7",
      "宋体" : "b",
      "黑体" : "a",
      "行楷简" : "2",
      "行楷繁" : "9",
      "舒同"  : "13",
      "行书"  : "17",
      "隶书"  : "18",
      "隶书繁"  : "19",
      "仿宋体"  : "313",
      "菱心"  : "0",
      "秀英"  : "1",
      "雁翔"  : "4",
      "双线"  : "10",
      "雪峰"  : "12",
      "古文篆书" : "14",
      "花蝶" : "301",
      "彩蝶" : "302",
      "飞翔" : "303",
      "萝卜文"  : "304",
      "火柴文"  : "305",
      "太极文"  : "306",
      "嘟嘟字"  : "308",
      "水波文字"  : "311",
      "空心体"  : "384",
      "书法字体"  : "385",
      "书法体"  : "386",
      "怪怪体"  : "387",
      "钢笔字"  : "388",
      "和楷体" : "389",
      "手写体" : "390",
      "灵芝体" : "391",
      "鼠标体" : "392",
      "硬草书"  : "393",
      "小丸子"  : "394",
      "明星手写体"  : "5",
      "大草体字"  : "395",
      "娃娃字体"  : "3",
      "空心咪咪体"  : "11",
      "个性繁中变"  : "15",
      "黛玉字体"  : "307",
      "凌波字体"  : "309",
      "清韵字体"  : "310",
      "猫猫字体" : "312",
      "卡通字体" : "397",
      "毛笔字体" : "399",
      "金文大篆体字" : "23",
      "小篆字体"  : "24",
      "篆书篆体字"  : "25",
      "一起去看海"  : "314",
      "一起恋爱"  : "315",
      "万圣节快乐"  : "316",
      "且听风吟"  : "317",
      "他夏了夏天"  : "318",
      "你最疼爱的人"  : "319",
      "信心相随"  : "320",
      "单翼雪蝶"  : "321",
      "南辞遇蝶" : "322",
      "卷卷爱红唇" : "323",
      "后会有期" : "324",
      "咯咯哒的梦想" : "325",
      "圈圈泡泡"  : "326",
      "地狱引路人"  : "327",
      "夏天的风"  : "328",
      "天使恋曲"  : "329",
      "天空的距离"  : "330",
      "失忆蝴蝶结"  : "331",
      "安静的美女子"  : "332",
      "小兔闹革命"  : "333",
      "小肥泡中文"  : "334",
      "幸福四叶草"  : "335",
      "开开的蛋糕" : "336",
      "恋爱写真" : "337",
      "恋爱蝴蝶结" : "338",
      "恬夕别乱" : "339",
      "恬夕恋夕"  : "340",
      "恰逢其会"  : "341",
      "情书常规体"  : "342",
      "我是小天使"  : "343",
      "我爱他到白发"  : "344",
      "手写楷书"  : "345",
      "手写硬笔行书"  : "346",
      "时装静蕾字体"  : "347",
      "星光夜空爱情"  : "348",
      "星心甜甜圈"  : "349",
      "星火爱情" : "350",
      "星际Cream" : "351",
      "春天小蜜蜂" : "352",
      "暮夏何其孽" : "353",
      "梦中的婚礼"  : "354",
      "梦巴黎"  : "355",
      "楼花幽情"  : "356",
      "水果大联盟"  : "357",
      "泡泡猫"  : "358",
      "浮沉繁花"  : "359",
      "烟花易冷"  : "360",
      "玉米荡漾"  : "361",
      "甜菜五道杠"  : "362",
      "空心粉简洁"  : "363",
      "红星朵朵开" : "364",
      "线条的故事" : "365",
      "绿光森林" : "366",
      "美丽月亮船" : "367",
      "腾祥倩影简" : "368",
      "腾祥相思简" : "369",
      "花俏公主" : "370",
      "花落寄相思" : "371",
      "花里胡哨" : "372",
      "草莓之心" : "373",
      "荼蘼花开" : "374",
      "葬的彼岸" : "375",
      "蝴蝶结云彩" : "376",
      "蝶恋之樱" : "377",
      "请叫我天然萌" : "378",
      "迪斯尼美丽" : "379",
      "钻石绵羊" : "380",
      "阿苗笑笑" : "381",
      "阿霏蓝天梦" : "382",
      "马卡龙方块" : "383"
    },
    styleImage: {
      "901": require('../assets/images/styles/a901.gif'),
      "905": require('../assets/images/styles/a905.gif'),
      "6": require('../assets/images/styles/a6.gif'),
      "21"  : require('../assets/images/styles/a21.gif'),
      "22"  : require('../assets/images/styles/a22.gif'),
      "396"  : require('../assets/images/styles/a396.gif'),
      "398"  : require('../assets/images/styles/a398.gif'),
      "2"  : require('../assets/images/styles/a2.gif'),
      "16"  : require('../assets/images/styles/a16.gif'),
      "7"  : require('../assets/images/styles/a7.gif'),
      "b" : require('../assets/images/styles/ab.gif'),
      "a" : require('../assets/images/styles/aa.gif'),
      "2" : require('../assets/images/styles/a2.gif'),
      "9" : require('../assets/images/styles/a9.gif'),
      "13"  : require('../assets/images/styles/a13.gif'),
      "17"  : require('../assets/images/styles/a17.gif'),
      "18"  : require('../assets/images/styles/a18.gif'),
      "19"  : require('../assets/images/styles/a19.gif'),
      "313"  : require('../assets/images/styles/a313.gif'),
      "0"  : require('../assets/images/styles/a0.gif'),
      "1"  : require('../assets/images/styles/a1.gif'),
      "4"  : require('../assets/images/styles/a4.gif'),
      "10"  : require('../assets/images/styles/a10.gif'),
      "12"  : require('../assets/images/styles/a12.gif'),
      "14" : require('../assets/images/styles/a14.gif'),
      "301" : require('../assets/images/styles/a301.gif'),
      "302" : require('../assets/images/styles/a302.gif'),
      "303" : require('../assets/images/styles/a303.gif'),
      "304"  : require('../assets/images/styles/a304.gif'),
      "305"  : require('../assets/images/styles/a305.gif'),
      "306"  : require('../assets/images/styles/a306.gif'),
      "308"  : require('../assets/images/styles/a308.gif'),
      "311"  : require('../assets/images/styles/a311.gif'),
      "384"  : require('../assets/images/styles/a384.gif'),
      "385"  : require('../assets/images/styles/a385.gif'),
      "386"  : require('../assets/images/styles/a386.gif'),
      "387"  : require('../assets/images/styles/a387.gif'),
      "388"  : require('../assets/images/styles/a388.gif'),
      "389" : require('../assets/images/styles/a389.gif'),
      "390" : require('../assets/images/styles/a390.gif'),
      "391" : require('../assets/images/styles/a391.gif'),
      "392" : require('../assets/images/styles/a392.gif'),
      "393"  : require('../assets/images/styles/a393.gif'),
      "394"  : require('../assets/images/styles/a394.gif'),
      "5"  : require('../assets/images/styles/a5.gif'),
      "395"  : require('../assets/images/styles/a395.gif'),
      "3"  : require('../assets/images/styles/a3.gif'),
      "11"  : require('../assets/images/styles/a11.gif'),
      "15"  : require('../assets/images/styles/a15.gif'),
      "307"  : require('../assets/images/styles/a307.gif'),
      "309"  : require('../assets/images/styles/a309.gif'),
      "310"  : require('../assets/images/styles/a310.gif'),
      "312" : require('../assets/images/styles/a312.gif'),
      "397" : require('../assets/images/styles/a397.gif'),
      "399" : require('../assets/images/styles/a399.gif'),
      "23" : require('../assets/images/styles/a23.gif'),
      "24"  : require('../assets/images/styles/a24.gif'),
      "25"  : require('../assets/images/styles/a25.gif'),
      "314"  : require('../assets/images/styles/a314.gif'),
      "315"  : require('../assets/images/styles/a315.gif'),
      "316"  : require('../assets/images/styles/a316.gif'),
      "317"  : require('../assets/images/styles/a317.gif'),
      "318"  : require('../assets/images/styles/a318.gif'),
      "319"  : require('../assets/images/styles/a319.gif'),
      "320"  : require('../assets/images/styles/a320.gif'),
      "321"  : require('../assets/images/styles/a321.gif'),
      "322" : require('../assets/images/styles/a322.gif'),
      "323" : require('../assets/images/styles/a323.gif'),
      "324" : require('../assets/images/styles/a324.gif'),
      "325" : require('../assets/images/styles/a325.gif'),
      "326"  : require('../assets/images/styles/a326.gif'),
      "327"  : require('../assets/images/styles/a327.gif'),
      "328"  : require('../assets/images/styles/a328.gif'),
      "329"  : require('../assets/images/styles/a329.gif'),
      "330"  : require('../assets/images/styles/a330.gif'),
      "331"  : require('../assets/images/styles/a331.gif'),
      "332"  : require('../assets/images/styles/a332.gif'),
      "333"  : require('../assets/images/styles/a333.gif'),
      "334"  : require('../assets/images/styles/a334.gif'),
      "335"  : require('../assets/images/styles/a335.gif'),
      "336" : require('../assets/images/styles/a336.gif'),
      "337" : require('../assets/images/styles/a337.gif'),
      "338" : require('../assets/images/styles/a338.gif'),
      "339" : require('../assets/images/styles/a339.gif'),
      "340"  : require('../assets/images/styles/a340.gif'),
      "341"  : require('../assets/images/styles/a341.gif'),
      "342"  : require('../assets/images/styles/a342.gif'),
      "343"  : require('../assets/images/styles/a343.gif'),
      "344"  : require('../assets/images/styles/a344.gif'),
      "345"  : require('../assets/images/styles/a345.gif'),
      "346"  : require('../assets/images/styles/a346.gif'),
      "347"  : require('../assets/images/styles/a347.gif'),
      "348"  : require('../assets/images/styles/a348.gif'),
      "349"  : require('../assets/images/styles/a349.gif'),
      "350" : require('../assets/images/styles/a350.gif'),
      "351" : require('../assets/images/styles/a351.gif'),
      "352" : require('../assets/images/styles/a352.gif'),
      "353" : require('../assets/images/styles/a353.gif'),
      "354"  : require('../assets/images/styles/a354.gif'),
      "355"  : require('../assets/images/styles/a355.gif'),
      "356"  : require('../assets/images/styles/a356.gif'),
      "357"  : require('../assets/images/styles/a357.gif'),
      "358"  : require('../assets/images/styles/a358.gif'),
      "359"  : require('../assets/images/styles/a359.gif'),
      "360"  : require('../assets/images/styles/a360.gif'),
      "361"  : require('../assets/images/styles/a361.gif'),
      "362"  : require('../assets/images/styles/a362.gif'),
      "363"  : require('../assets/images/styles/a363.gif'),
      "364" : require('../assets/images/styles/a364.gif'),
      "365" : require('../assets/images/styles/a365.gif'),
      "366" : require('../assets/images/styles/a366.gif'),
      "367" : require('../assets/images/styles/a367.gif'),
      "368" : require('../assets/images/styles/a368.gif'),
      "369" : require('../assets/images/styles/a369.gif'),
      "370" : require('../assets/images/styles/a370.gif'),
      "371" : require('../assets/images/styles/a371.gif'),
      "372" : require('../assets/images/styles/a372.gif'),
      "373" : require('../assets/images/styles/a373.gif'),
      "374" : require('../assets/images/styles/a374.gif'),
      "375" : require('../assets/images/styles/a375.gif'),
      "376" : require('../assets/images/styles/a376.gif'),
      "377" : require('../assets/images/styles/a377.gif'),
      "378" : require('../assets/images/styles/a378.gif'),
      "379" : require('../assets/images/styles/a379.gif'),
      "380" : require('../assets/images/styles/a380.gif'),
      "381" : require('../assets/images/styles/a381.gif'),
      "382" : require('../assets/images/styles/a382.gif'),
      "383" : require('../assets/images/styles/a383.gif')
    },
    selectedStyleList: [],
    selectedStatus: []
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentWillReceiveProps () {

  }

  componentWillUpdate (nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }

  _selectedStyle (item) {
    this.state.selectedStyleList.push(item)
    console.log(this.state.selectedStyleList)
  }

  _renderStyleListView = () => {
    return Object.keys(this.state.styleData).map((item, index) => (
      <TouchableOpacity key={index} onPress={() => this._selectedStyle({[this.state.styleData[item]]: this.state.styleData[item]})}>
        <View 
          style={[FontStyle.StyleListItemView, this.state.selectedStatus.includes(this.state.styleData[item]) && FontStyle.StyleListItemViewActive]}
          >
          {/* , this.state.selectedStyleList[this.state.styleData[item]] */}
          <Image 
            resizeMode='contain'
            style={FontStyle.StyleListItemImageView} 
            source={this.state.styleImage[this.state.styleData[item]]}/>
          <Text style={FontStyle.StyleListItemTextView}>{`${index}. ${item}`}</Text>
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