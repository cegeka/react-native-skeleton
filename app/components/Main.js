import React, { Component } from 'react';
import { Container, Header, Title, Content, Text, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
                <Icon name='menu'/>
            </Button>
          </Left>
            <Body>
                <Title>Header</Title>
            </Body>
          <Right/>
        </Header>
        <Content>
          <Text>Your main content goes here</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}