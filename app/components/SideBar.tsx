import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base'
import { Link } from 'react-router-native'

export interface Props {}
export interface State {}
export default class SideBar extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Link to='/'>
                <Text>Home</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link to='/info'>
                <Text>Info</Text>
              </Link>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}