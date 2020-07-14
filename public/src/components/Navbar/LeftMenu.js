import React, { Component } from 'react';
import { Menu, Icon,Input } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    return (
        <Input className="searchbox"
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 500 }}    />
    
	// 	<Menu mode="horizontal">
    //   	<Menu.Item key="mail">
    //       <a href="">Home</a>
    //     </Menu.Item>
    //     <Menu.Item key="mailly">
    //       <a href="">Goggly</a>
    //     </Menu.Item>
    //     <Menu.Item key="alipay">
    //       <a href="">Contact Us</a>
    //     </Menu.Item>
    //   </Menu>
    );
  }
}

export default LeftMenu;