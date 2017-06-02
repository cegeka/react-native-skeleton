import React, { Component } from 'react'
import { Drawer } from 'native-base'
import SideBar from './SideBar'

export interface Props {
  open: boolean
}
export interface State {}
export default class Menu extends Component<Props, State> {

  private drawer

  componentWillUpdate() {
    if (this.props.open) this.openDrawer()
    else this.closeDrawer()
  }

  render() {
    return (
      <Drawer
        ref={ref => { this.drawer = ref }}
        content={<SideBar />}
        onClose={() => this.closeDrawer()} />
    )
  }

  openDrawer() {
    this.drawer._root.open()
  }

  closeDrawer() {
    this.drawer._root.close()
  }
}