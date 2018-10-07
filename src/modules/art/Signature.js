import React, { Component } from 'react';
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
  Row,
  View
} from 'native-base';


class Signature extends Component{

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
        <Header>
          <Left>
            <Button transparent>
              <Icon name='beer' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

         <Content>
          <Form  style={{borderWidth: 1, borderColor: 'red', padding: 5}}>
            <Item inlineLabel style={{marginLeft: 0}}>
              <Input style={{borderWidth: 1, borderColor: '#ccc',borderRightWidth: 0, borderTopLeftRadius: 2, borderBottomLeftRadius: 2}} />
              <Button danger style={{height: 50, paddingHorizontal: 16}}><Text> 签名 </Text></Button>
            </Item>
          </Form>
          <Grid style={{position: 'relative'}}>
            <Row>
              <Col style={{ backgroundColor: '#635DB7', height: 200, borderColor: '#777777', borderWidth: 1 }}></Col>
              <Col style={{ backgroundColor: '#00CE9F', height: 200, borderColor: '#777777', borderWidth: 1 }}></Col>
            </Row>
            <Row>
              <Col style={{ backgroundColor: '#f2f2f2', height: 200, borderColor: '#777777', borderWidth: 1 }}></Col>
              <Col style={{ backgroundColor: '#cccccc', height: 200, borderColor: '#777777', borderWidth: 1 }}></Col>
            </Row>
            <View style={{ backgroundColor: '#fff', position: 'absolute', left: 150, top: 150, width: 100, height: 100, borderColor: 'red', borderWidth: 1}}></View>
          </Grid>
          <Button block danger>
            <Text>保存签名</Text>
          </Button>
        </Content>
      </Container>
    )
	}
}

module.exports = Signature