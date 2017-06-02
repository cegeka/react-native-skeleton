import React, { Component } from 'react'
import { Container, Header, Title, Content, Text, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base'
import { View } from 'react-native'
import { Route } from 'react-router-native'
import Home from '../containers/Home'
import Info from '../containers/Info'
import Menu from '../components/Menu'

export interface Props {}
export interface State {
  menu: {
    open: boolean
  }
}
export default class Main extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      menu: {
        open: true
      }
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.toggleMenu()}>
                <Icon name='menu'/>
            </Button>
          </Left>
            <Body>
                <Title>Header</Title>
            </Body>
          <Right/>
        </Header>
        <Menu open={this.state.menu.open}/>
        <Content>
          <Route exact path='/' component={Home}/>
          <Route path='/info' component={Info}/>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }

  toggleMenu() {
    this.setState({
      menu: {
        open: !this.state.menu.open
      }
    })
  }
}