import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    return (
		<Menu mode="horizontal" className="rightymenu">
        <Menu.Item key="mail">
          <a href="">accounts & lists</a>
        </Menu.Item>
        <Menu.Item key="maily">
          <a href="">returns & orders</a>
        </Menu.Item>
        <Menu.Item key="mailo">
          <a href="">you're prime</a>
        </Menu.Item>
        <Menu.Item key="appa">
          <a href="">cart</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;