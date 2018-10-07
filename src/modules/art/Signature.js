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
          <Form  style={{ marginVertical: 4, marginHorizontal: 2, padding: 0}}>
            <Item inlineLabel>
              <Input style={{borderWidth: 1, borderColor: '#ccc', borderTopLeftRadius: 2, borderBottomEndRadius: 2}} />
              <Button danger><Text> 签名 </Text></Button>
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
            <Text>保存</Text>
          </Button>
        </Content>
      </Container>
    )
	}
}

module.exports = Signature