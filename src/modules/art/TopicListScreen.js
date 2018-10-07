import React, { Component } from 'react';
import { Container, Text, Button, Icon, Header, Left, Body, Right, Title } from 'native-base';
import {StackNavigator} from 'react-navigation';
import { Platform } from 'react-native';


class TopicListScreen extends Component{
	static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      title: params ? params.title : 'Home',
      headerLeft: (<Button transparent>
       <Icon type="FontAwesome" name="home" />
      </Button>)
    }
  };

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			waiting: false,
			searching: false
		}
	}

	render() {
		return (
      <Container>
        {/* <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header> */}
        <Text>xx</Text>
      </Container>
    )
	}
}

const TopicListStack = StackNavigator({
  List: {screen: TopicListScreen}
}, {
  initialRouteName: 'List',
  navigationOptions: {
    drawerLockMode: Platform.OS === 'ios' ? 'locked-closed' : 'unlocked'
  }
})

module.exports = TopicListStack