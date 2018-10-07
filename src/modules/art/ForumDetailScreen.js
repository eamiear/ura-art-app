import React from 'react';
import {StackNavigator} from 'react-navigation';
import { Button, Icon, Container, Content, List } from 'native-base';
import { ActivityIndicator } from 'react-native';

class ForumDetailScreen extends React.Component {
  // static navigationOptions = ({navigation}) => {
  //   const {params} = navigation.state;

  //   return {
  //     title: params ? params.title : '',
  //     headerLeft: <Button
  //       transparent
  //       onPress={() => {
            
  //       }}><Icon name="menu" style={{color: '#fff'}}></Icon></Button>
  //   }
  // };

  constructor(props) {
    super(props);
    this.state = {
      forum: []
    }
  }

  render() {
      
    return (
      <Container>
        <Content>
          {this.state.loading && <ActivityIndicator style={{margin: 30}}></ActivityIndicator>}
          <List noBorder>
          
          </List>
        </Content>
      </Container>
    )
  }
}

const ForumDetailStack = StackNavigator({
  List: {screen: ForumDetailScreen}
}, {
  initialRouteName: 'List',
  // navigationOptions: {
  //   headerStyle: {
  //     backgroundColor: '#32CD32'
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold'
  //   }
  // }
})

module.exports = ForumDetailStack