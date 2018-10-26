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
    colors: {
      "爱丽丝蓝": "#F0F8FF",
      "古董白": "#FAEBD7",
      "碧　绿": "#7FFFD4",
      "青白色": "#F0FFFF",
      "米　色": "#F5F5DC",
      "陶坯黄": "#FFE4C4",
      "黑　色": "#000000",
      "杏仁白": "#FFEBCD",
      "蓝　色": "#0000FF",
      "蓝紫色": "#8A2BE2",
      "褐　色": "#A52A2A",
      "硬木褐": "#DEB887",
      "军服蓝": "#5F9EA0",
      "查特酒绿": "#7FFF00",
      "巧克力色": "#D2691E",
      "珊瑚红": "#FF7F50",
      "矢车菊蓝": "#6495ED",
      "玉米穗黄": "#FFF8DC",
      "绯　红": "#DC143C",
      "青　色": "#00FFFF",
      "深　蓝": "#00008B",
      "深　青": "#008B8B",
      "深金菊黄": "#B8860B",
      "暗　灰": "#A9A9A9",
      "深　绿": "#006400",
      "深卡其色": "#BDB76B",
      "深品红": "#8B008B",
      "深橄榄绿": "#556B2F",
      "深　橙": "#FF8C00",
      "深洋兰紫": "#9932CC",
      "深　红": "#8B0000",
      "深鲑红": "#E9967A",
      "深海藻绿": "#8FBC8F",
      "深岩蓝": "#483D8B",
      "深岩灰": "#2F4F4F",
      "深松石绿": "#00CED1",
      "深　紫": "#9400d3",
      "深　粉": "#FF1493",
      "深天蓝": "#00BFFF",
      "昏　灰": "#696969",
      "湖　蓝": "#1E90FF",
      "火砖红": "#B22222",
      "花卉白": "#FFFAF0",
      "森林绿": "#228B22",
      "庚氏灰": "#DCDCDC",
      "幽灵白": "#F8F8FF",
      "金　色": "#FFD700",
      "金菊黄": "#DAA520",
      "灰　色": "#808080",
      "调和绿": "#008000",
      "黄绿色": "#ADFF2F",
      "蜜瓜绿": "#F0FFF0",
      "艳　粉": "#FF69B4",
      "印度红": "#CD5C5C",
      "靛　蓝": "#4B0082",
      "象牙白": "#FFFFF0",
      "卡其色": "#F0E68C",
      "薰衣草紫": "#E6E6FA",
      "薰衣草红": "#7CFC00",
      "草坪绿": "#FFFACD",
      "柠檬绸黄": "#ADD8E6",
      "浅　蓝": "#F08080",
      "浅珊瑚红": "#E0FFFF",
      "浅　青": "#FAFAD2",
      "浅金菊黄": "#D3D3D3",
      "亮　灰": "#90EE90",
      "浅　绿": "#FFB6C1",
      "浅　粉": "#FFA07A",
      "浅鲑红": "#20B2AA",
      "浅海藻绿": "#87CEFA",
      "浅天蓝": "#778899",
      "浅岩灰": "#0C4DE",
      "浅钢青": "#FFFFE0",
      "浅　黄": "#00FF00",
      "绿　色": "#32CD32",
      "青柠绿": "#FAF0E6",
      "亚麻色": "#FF00FF",
      "洋　红": "#800000",
      "栗　色": "#66CDAA",
      "中碧绿": "#0000CD",
      "中　蓝": "#BA55D3",
      "中洋兰紫": "#9370D8",
      "中　紫": "#3CB371",
      "中海藻绿": "#7B68EE",
      "中岩蓝": "#00FA9A",
      "中嫩绿": "#48D1CC",
      "中松石绿": "#C71585",
      "中紫红": "#191970",
      "午夜蓝": "#F5FFFA",
      "薄荷乳白": "#FFE4E1",
      "雾玫瑰红": "#FFE4B5",
      "鹿皮色": "#FFDEAD",
      "土著白": "#000080",
      "藏　青": "#FDF5E6",
      "旧蕾丝白": "#808000",
      "橄榄色": "#6B8E23",
      "橄榄绿": "#FFA500",
      "橙　色": "#FF4500",
      "橘　红": "#DA70D6",
      "洋兰紫": "#EEE8AA",
      "白金菊黄": "#98FB98",
      "白绿色": "#AFEEEE",

      "白松石绿": "#D87093",
      "白紫红": "#FFEFD5",
      "番木瓜橙": "#FFDAB9",
      "粉扑桃色": "#CD853F",
      "秘鲁红": "#FFC0CB",
      "粉　色": "#DDA0DD",
      "李　紫": "#B0E0E6",
      "粉末蓝": "#B0E0E6",
      "紫　色": "#800080",
      "红　色": "#FF0000",
      "玫瑰褐": "#BC8F8F",
      "品　蓝": "#4169E1",
      "鞍　褐": "#8B4513",
      "鲑　红": "#FA8072",
      "沙　褐": "#F4A460",
      "海藻绿": "#2E8B57",
      "贝壳白": "#FFF5EE",
      "土黄赭": "#A0522D",
      "银　色": "#C0C0C0",
      "天　蓝": "#87CEEB",
      "岩　蓝": "#6A5ACD",
      "岩　灰": "#708090",
      "雪　白": "#FFFAFA",
      "春　绿": "#00FF7F",
      "钢　青": "#4682B4",
      "日晒褐": "#D2B48C",
      "鸭翅绿": "#008080",
      "蓟　紫": "#D8BFD8",
      "番茄红": "#FF6347",
      "松石绿": "#40E0D0",

      "紫罗兰色": "#EE82EE",
      "麦　色": "#F5DEB3",
      "白　色": "#FFFFFF",
      "烟雾白": "#F5F5F5",
      "黄　色": "#FFFF00",
      "暗黄绿色": "#9ACD32"
    }
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