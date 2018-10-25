import React, {PureComponent} from 'react'
import {View,Text,TouchableWithoutFeedback, SectionList,StyleSheet,RefreshControl} from 'react-native'
import {
  Container,
  Card,
  CardItem,
} from 'native-base';
import CommonHeader from "../components/CommonHeader";

export default class ColorsView extends PureComponent {
  state = {
    colors: [
      "爱丽丝蓝",
      "碧　绿",
      "米　色",
      "陶坯黄",
      "黑　色",
      "蓝　色",
      "蓝紫色",
      "褐　色",
      "硬木褐",
      "军服蓝",
      "查特酒绿",
      "巧克力色",
      "珊瑚红",
      "矢车菊蓝",
      "玉米穗黄",
      "绯　红",
      "青　色",
      "深　蓝",
      "深　青",
      "深金菊黄",
      "暗　灰",
      "深　绿",
      "深卡其色",
      "深品红",
      "深橄榄绿",
      "深　橙",
      "深洋兰紫",
      "深　红",
      "深鲑红",
      "深海藻绿",
      "深岩蓝",
      "深岩灰",
      "深松石绿",
      "深　紫",
      "深　粉",
      "深天蓝",
      "昏　灰",
      "湖　蓝",
      "火砖红",
      "森林绿",
      "庚氏灰",
      "金　色",
      "金菊黄",
      "灰　色",
      "调和绿",
      "黄绿色",
      "蜜瓜绿",
      "艳　粉",
      "印度红",
      "靛　蓝",
      "卡其色",
      "薰衣草紫",
      "薰衣草红",
      "草坪绿",
      "柠檬绸黄",
      "浅　蓝",
      "浅珊瑚红",
      "浅　青",
      "浅金菊黄",
      "亮　灰",
      "浅　绿",
      "浅　粉",
      "浅鲑红",
      "浅海藻绿",
      "浅天蓝",
      "浅岩灰",
      "浅钢青",
      "浅　黄",
      "绿　色",
      "青柠绿",
      "亚麻色",
      "洋　红",
      "栗　色",
      "中碧绿",
      "中　蓝",
      "中洋兰紫",
      "中　紫",
      "中海藻绿",
      "中岩蓝",
      "中嫩绿",
      "中松石绿",
      "中紫红",
      "午夜蓝",
      "雾玫瑰红",
      "鹿皮色",
      "藏　青",
      "橄榄色",
      "橄榄绿",
      "橙　色",
      "橘　红",
      "洋兰紫",
      "白金菊黄",
      "白绿色",
      "白松石绿",
      "白紫红",
      "番木瓜橙",
      "粉扑桃色",
      "秘鲁红",
      "粉　色",
      "李　紫",
      "粉末蓝",
      "紫　色",
      "红　色",
      "玫瑰褐",
      "品　蓝",
      "鞍　褐",
      "鲑　红",
      "沙　褐",
      "海藻绿",
      "土黄赭",
      "银　色",
      "天　蓝",
      "岩　蓝",
      "岩　灰",
      "春　绿",
      "钢　青",
      "日晒褐",
      "鸭翅绿",
      "蓟　紫",
      "番茄红",
      "松石绿",
      "紫罗兰色",
      "麦　色",
      "黄　色",
      "暗黄绿色"
    ]
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentWillReceiveProps () {

  }

  render () {
    return (
      <Container style={{position: 'relative'}}>
        <CommonHeader title="选择颜色" canBack {...this.props}></CommonHeader>
        <View>
          <Text> 颜色 </Text>
        </View>
      </Container>
    )
  }
}